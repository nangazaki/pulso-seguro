import state from './state';

export const getToken = () => {
  return state.token
};

export const getLogged = () => {
  return state.isLogged
}

export const hasToken = ({ token }) => !!token