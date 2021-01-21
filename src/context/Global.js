import { createContext, useReducer } from 'react';

const initialState = {
  isLoading: false,
  error: null,
};

export const GlobalContext = createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const Global = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
export default Global;
