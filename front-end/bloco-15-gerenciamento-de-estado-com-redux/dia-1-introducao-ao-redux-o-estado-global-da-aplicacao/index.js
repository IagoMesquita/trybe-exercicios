const btnNext = document.getElementById('next');
const btnPrevious = document.getElementById('previous');

const htmlValueColor = document.getElementById('value');
const containerShowColor = document.getElementById('container');

btnNext.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

btnPrevious.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});


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
    default:
      return state;
  }
};


const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  htmlValueColor.innerHTML = colors[index];
  containerShowColor.style.backgroundColor = colors[index];
})