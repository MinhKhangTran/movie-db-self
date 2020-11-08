import React from "react";
import useFetch from "../hook/useFetch";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [query, setQuery] = React.useState("Harry Potter");
  const { loading, error, data } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider value={{ loading, query, error, data, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
