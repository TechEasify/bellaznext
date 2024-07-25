import React, { createContext, useContext, useEffect, useState } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import {
  GET_HOME_PAGE,
  GET_ICON_SECTION,
  GET_INSIGHTS_SECTION,
  GET_MENU_SECTION,
  GET_MUSIC_SECTION,
  GET_NAV_SECTION,
  GET_SUBMENU_SECTION,
  GET_TESTIMONIAL_SECTION,
  GET_TOPHEADLINE_PAGE,
  SEARCH_QUERY,
} from "./queries/Queries";
import {
  CATEGORY_BREAKING_QUERY,
  GET_NEWS_SECTION,
  INSIGHTS_DATA,
} from "./queries/categoryQueries";
import { useRouter } from "next/router";

const DialogContext = createContext();

export const useDialog = () => {
  return useContext(DialogContext);
};

export const DialogProvider = ({ children }) => {
  const router = useRouter();
  const { categoryslug, slug } = router.query;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [navData, setNavData] = useState(null);
  const [nodeByUri, setNodeByUri] = useState(null);
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [dataNav, setDataNav] = useState(null);
  const [dataIcon, setDataIcon] = useState(null);
  const [bannerData, setBannerData] = useState(null);
  const [insightsQuery, setInsightsQuery] = useState(null);
  const [musicQuery, setMusicQuery] = useState(null);
  const [categoryInsightData, setCategoryInsightData] = useState(null);
  const [testimonialQuery, setTestimonialQuery] = useState(null);
  const [searchData, setSearchData] = useState(null);

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
    loading: loadingIcon,
    error: errorIcon,
    data: iconDataResult,
  } = useQuery(GET_ICON_SECTION, { fetchPolicy: "cache-first" });

  const {
    loading: loadingSearch,
    error: errorSearch,
    data: navDataSearch,
  } = useQuery(SEARCH_QUERY, { fetchPolicy: "cache-first" });

  const {
    data: categoryData,
    loading: loadingCategory,
    error: errorCategory,
    fetchMore,
  } = useQuery(CATEGORY_BREAKING_QUERY, {
    variables: { uri },
    fetchPolicy: "cache-first",
  });

  console.log(
    categoryData,
    "categoryDatacategoryDatacategoryDatacategoryDatacategoryData"
  );

  const {
    loading: bannerLoading,
    error: bannerError,
    data: Data,
  } = useQuery(GET_HOME_PAGE, { fetchPolicy: "cache-first" });

  const {
    loading: insightsLoading,
    error: insightsError,
    data: insightsData,
  } = useQuery(GET_INSIGHTS_SECTION, { fetchPolicy: "cache-first" });

  const {
    loading: musicLoading,
    error: musicError,
    data: musicData,
  } = useQuery(GET_MUSIC_SECTION, { fetchPolicy: "cache-first" });

  const {
    data: categoryInsight,
    loading: categoryLoading,
    error: categoryError,
    fetchMore: insightFetchMore,
  } = useQuery(INSIGHTS_DATA, { fetchPolicy: "cache-first" });

  const {
    data: testimonialData,
    loading: testimonialLoading,
    error: testimonialError,
  } = useQuery(GET_TESTIMONIAL_SECTION, { fetchPolicy: "cache-first" });

  console.log(testimonialData, "testimonialData");

  useEffect(() => {
    if (navDataResult) setDataNav(navDataResult);
    if (iconDataResult) setDataIcon(iconDataResult);
    if (categoryData) setNodeByUri(categoryData);
    if (Data) setBannerData(Data);
    if (insightsData) setInsightsQuery(insightsData);
    if (musicData) setMusicQuery(musicData);
    if (categoryInsight) setCategoryInsightData(categoryInsight);
    if (testimonialData) setTestimonialQuery(testimonialData);
    if (navDataSearch) setSearchData(navDataSearch);
  }, [
    navDataResult,
    iconDataResult,
    categoryData,
    Data,
    insightsData,
    testimonialData,
    musicData,
    categoryInsight,
    navDataSearch,
  ]);

  console.log(nodeByUri, "nodeByUri");

  console.log(bannerData, "bannerData");

  return (
    <DialogContext.Provider
      value={{
        setNavData,
        navData,
        dataNav,
        posts,
        setPosts,
        cursor,
        setCursor,
        setNodeByUri,
        nodeByUri,
        isDialogOpen,
        openDialog,
        closeDialog,
        dataIcon,
        loadingNav,
        loadingIcon,
        uri,
        loadingCategory,
        fetchMore,
        insightFetchMore,
        bannerData,
        bannerLoading,
        bannerError,
        insightsQuery,
        insightsLoading,
        insightsError,
        musicQuery,
        musicLoading,
        musicError,
        iconDataResult,
        errorIcon,
        categoryInsightData,
        categoryLoading,
        categoryError,
        testimonialQuery,
        searchData
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
