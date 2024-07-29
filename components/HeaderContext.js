import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_FOOTER_PAGE,
  GET_ICON_SECTION,
  GET_NAV_SECTION,
  SEARCH_QUERY,
  SEO_QUERY,
} from "./queries/Queries";
import { useRouter } from "next/router";
import Footer from "./Footer";

const HeaderContext = createContext();

export const useHeader = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }) => {
  const router = useRouter();
  const { categoryslug, slug } = router.query;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [navData, setNavData] = useState(null);
  const [dataNav, setDataNav] = useState(null);
  const [dataIcon, setDataIcon] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  const uri = `/category/${categoryslug}`;
  const detailUri = `/${slug}`;
  console.log(detailUri, "detailUri");

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const {
    loading: loadingNav,
    error: errorNav,
    data: navDataResult,
  } = useQuery(GET_NAV_SECTION, { fetchPolicy: "cache-first" });

  const {
    loading: loadingSeo,
    error: errorSeo,
    data: seoQuery,
  } = useQuery(SEO_QUERY, { fetchPolicy: "cache-first" });

  const {
    loading: loadingIcon,
    error: errorIcon,
    data: iconDataResult,
  } = useQuery(GET_ICON_SECTION, { fetchPolicy: "cache-first" });

  const {
    loading: loadingSearch,
    error: errorSearch,
    data: navDataSearch,
    fetchMore: searchFetch,
  } = useQuery(SEARCH_QUERY, { fetchPolicy: "cache-first" });

  const {
    loading: loadingFooter,
    error: errorFooter,
    data: dataFooter,
  } = useQuery(GET_FOOTER_PAGE);

  useEffect(() => {
    if (navDataResult) setDataNav(navDataResult);
    if (iconDataResult) setDataIcon(iconDataResult);
    if (navDataSearch) setSearchData(navDataSearch);
    if (seoQuery) setSeoData(seoQuery);
    if (dataFooter) setFooterData(dataFooter);
  }, [navDataResult, iconDataResult, navDataSearch, seoQuery, dataFooter]);

  return (
    <HeaderContext.Provider
      value={{
        setNavData,
        navData,
        dataIcon,
        dataNav,
        searchData,
        searchFetch,
        loadingSearch,
        errorSearch,
        seoData,
        footerData,
        loadingFooter,
        errorFooter
      }}
    >
      {children}
      <Footer/>
    </HeaderContext.Provider>
  );
};
