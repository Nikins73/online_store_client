const SET_IS_AUTH = "SET_IS_AUTH";
const SET_USER = "SET_USER";

const initialState = {
  user: {},
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const setIsAuth = (isAuth) => ({
  type: SET_IS_AUTH,
  payload: isAuth,
});
export const setUser = (isAuth) => ({
  type: SET_USER,
  payload: isAuth,
});

export default userReducer;
