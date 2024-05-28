import React, { createContext, useContext, useEffect, useState } from "react";

const DialogContext = createContext();

export const useDialog = () => {
  return useContext(DialogContext);
};

export const DialogProvider = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  const [media, setMedia] = useState([]);
  const [footerMenu, setFooterMenu] = useState([]);
  const [sideBarMenu, setSideBarMenu] = useState([]);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <DialogContext.Provider value={{ isDialogOpen, openDialog, closeDialog}}>
      {children}
    </DialogContext.Provider>
  );
};
