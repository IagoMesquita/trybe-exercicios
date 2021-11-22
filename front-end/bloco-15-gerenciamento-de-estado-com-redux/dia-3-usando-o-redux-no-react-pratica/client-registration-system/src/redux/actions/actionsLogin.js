export const LOGIN = 'LOGIN';

export const login = (email, senha) => ({
  type: LOGIN,
  payload: {
    email,
    senha,
  },
})