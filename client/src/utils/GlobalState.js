import React, { createContext, useContext } from "react";
import { reducers } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = reducers({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ""
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
