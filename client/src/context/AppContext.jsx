import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});
const AppProvider = ({ children }) => {
  const [user , setUser] = useState(null)
  const values = {};
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};


export default AppProvider;

export const useApp = () => useContext(AppContext);

