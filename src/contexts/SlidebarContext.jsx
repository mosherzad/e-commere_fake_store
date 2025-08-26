import React, { useState, createContext } from "react";

export const SlidebarContext = createContext();
const SlidebarProvider = ({ children }) => {
  const [openSlidebar, setOpenSlidebar] = useState(false);
  const handleClose = () => {
    setOpenSlidebar(false);
  };
  return (
    <SlidebarContext.Provider
      value={{ openSlidebar, setOpenSlidebar, handleClose }}
    >
      {children}
    </SlidebarContext.Provider>
  );
};

export default SlidebarProvider;
