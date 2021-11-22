import { CADASTRAR_CLIENTE } from "../actions/actionsClientes";

const INITIAL_STATE = [];

const clientesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CADASTRAR_CLIENTE:
      return [...state, {...action.payload}];
    default:
      return state;
  } 
}

export default clientesReducer;