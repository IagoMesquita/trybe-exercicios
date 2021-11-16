import LOGIN from '../actions/actionsLogin';

const INITIAL_STATE = {
  logged: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN:
      const { email, senha } = action.payload;
      const logged = email === '123' && senha === '123';
      return {
        logged,
      };
    default:
      return state;
  }
}

export default loginReducer;