const btnNext = document.getElementById('next');
const btnPrevious = document.getElementById('previous');
const btnRandom = document.getElementById('random');

const htmlValueColor = document.getElementById('value');
const containerShowColor = document.getElementById('container');

btnNext.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

btnPrevious.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

btnRandom.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });
})
//--------------------------------------------------------------------------------------------------
function criarCor () {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for(let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}
//-----------------------------------------------------------------------------------------------------


const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer =  (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
      ...state,
      index: state.index === state.colors.length - 1 ? 0 : state.index + 1, //Loǵica no gabrito//
    };
    case 'PREVIOUS_COLOR':
      return {
      ...state,
      index: state.index === 0 ? state.colors.length - 1 : state.index - 1, //Lógica no gabarito//
    };
    case 'RANDOM_COLOR':
      return{
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length
      }
    default:
      return state;
  }
};


const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.subscribe(() => {
  const { colors, index } = store.getState();
  htmlValueColor.innerHTML = colors[index];
  containerShowColor.style.backgroundColor = colors[index];
})