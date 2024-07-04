import React, { createContext, useContext, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_ICON_SECTION, GET_MENU_SECTION, GET_NAV_SECTION, GET_SUBMENU_SECTION } from "./queries/Queries";
import { CATEGORY_BREAKING_QUERY } from "./queries/categoryQueries";
import { useRouter } from "next/router";

const DialogContext = createContext();

export const useDialog = () => {
  return useContext(DialogContext);
};

export const DialogProvider = ({ children }) => {
  const router = useRouter();
  const { categoryslug } = router.query;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [navData, setNavData] = useState(null);
  const [nodeByUri, setNodeByUri] = useState(null);
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [media, setMedia] = useState([]);
  const [footerMenu, setFooterMenu] = useState([]);
  const [sideBarMenu, setSideBarMenu] = useState([]);
  const [dataNav, setDataNav] = useState(null);
  const [dataMenu, setDataMenu] = useState(null);
  const [datasubMenu, setDatasubMenu] = useState(null);
  const [dataIcon, setDataIcon] = useState(null);

  const uri = `/category/${categoryslug}`;

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const { loading: loadingNav, error: errorNav, data: navDataResult } = useQuery(GET_NAV_SECTION, { fetchPolicy: "cache-first" });
  const { loading: loadingMenu, error: errorMenu, data: menuDataResult } = useQuery(GET_MENU_SECTION, { fetchPolicy: "cache-first" });
  const { loading: loadingSubMenu, error: errorSubMenu, data: subMenuDataResult } = useQuery(GET_SUBMENU_SECTION, { fetchPolicy: "cache-first" });
  const { loading: loadingIcon, error: errorIcon, data: iconDataResult } = useQuery(GET_ICON_SECTION, { fetchPolicy: "cache-first" });
  const { data: categoryData, loading: loadingCategory, error: errorCategory, fetchMore } = useQuery(
    CATEGORY_BREAKING_QUERY,
    {
      variables: { uri },
      fetchPolicy: "cache-first",
    }
  );

  useEffect(() => {
    if (navDataResult) setDataNav(navDataResult);
    if (menuDataResult) setDataMenu(menuDataResult);
    if (subMenuDataResult) setDatasubMenu(subMenuDataResult);
    if (iconDataResult) setDataIcon(iconDataResult);
    if (categoryData) setNodeByUri(categoryData);
  }, [navDataResult, menuDataResult, subMenuDataResult, iconDataResult, categoryData]);

  return (
    <DialogContext.Provider value={{ setNavData, navData, dataNav, posts, setPosts, cursor, setCursor, setNodeByUri, nodeByUri, isDialogOpen, openDialog, closeDialog, dataMenu, datasubMenu, dataIcon, loadingNav, loadingMenu, loadingSubMenu, loadingIcon, uri, loadingCategory, fetchMore }}>
      {children}
    </DialogContext.Provider>
  );
};
