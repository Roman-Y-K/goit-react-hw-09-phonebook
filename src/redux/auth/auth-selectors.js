const getIsAuth = state => state.auth.isAuthenticated;
const getName = state => state.auth.user.name;

export default {
  getIsAuth,
  getName,
};
