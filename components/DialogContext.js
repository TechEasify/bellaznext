import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_ABOUT_PAGE, GET_ADVERTISE_PAGE, GET_CONTACT_PAGE, GET_HOME_PAGE, GET_INSIGHTS_SECTION, GET_MUSIC_SECTION, GET_TESTIMONIAL_SECTION, SEARCH_QUERY } from "./queries/Queries";
import { CATEGORY_BREAKING_QUERY, INSIGHTS_DATA } from "./queries/categoryQueries";

const DialogContext = createContext();

export const useDialog = () => {
  return useContext(DialogContext);
};

export const DialogProvider = ({ children }) => {
  const router = useRouter();
  const { categoryslug, slug } = router.query;
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [nodeByUri, setNodeByUri] = useState(null);
  const [bannerData, setBannerData] = useState(null);
  const [insightsQuery, setInsightsQuery] = useState(null);
  const [musicQuery, setMusicQuery] = useState(null);
  const [categoryInsightData, setCategoryInsightData] = useState(null);
  const [testimonialQuery, setTestimonialQuery] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [contactQuery, setContactQuery] = useState(null);
  const [aboutQuery, setAboutQuery] = useState(null);
  const [advertiseQuery, setAdvertiseQuery] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const uri = `/category/${categoryslug}`;

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const {
    loading: loadingSearch,
    error: errorSearch,
    data: navDataSearch,
    fetchMore: searchFetch,
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

  const {
    data: contactData,
    loading: contactLoading,
    error: contactError,
  } = useQuery(GET_CONTACT_PAGE, { fetchPolicy: "cache-first" });

  const {
    data: aboutData,
    loading: aboutLoading,
    error: aboutError,
  } = useQuery(GET_ABOUT_PAGE, { fetchPolicy: "cache-first" });

  const {
    data: advertiseData,
    loading: advertiseLoading,
    error: advertiseError,
  } = useQuery(GET_ADVERTISE_PAGE, { fetchPolicy: "cache-first" });

  useEffect(() => {
    if (categoryData) setNodeByUri(categoryData);
    if (Data) setBannerData(Data);
    if (insightsData) setInsightsQuery(insightsData);
    if (musicData) setMusicQuery(musicData);
    if (categoryInsight) setCategoryInsightData(categoryInsight);
    if (testimonialData) setTestimonialQuery(testimonialData);
    if (navDataSearch) setSearchData(navDataSearch);
    if (contactData) setContactQuery(contactData);
    if (aboutData) setAboutQuery(aboutData);
    if (advertiseData) setAdvertiseQuery(advertiseData);
  }, [ 
    categoryData,
    Data,
    insightsData,
    testimonialData,
    musicData,
    categoryInsight,
    navDataSearch,
    contactData,
    aboutData,
    advertiseData
  ]);

  const memoizedPosts = useMemo(() => posts, [posts]);
  const memoizedCursor = useMemo(() => cursor, [cursor]);
  const memoizedNodeByUri = useMemo(() => nodeByUri, [nodeByUri]);
  const memoizedBannerData = useMemo(() => bannerData, [bannerData]);
  const memoizedInsightsQuery = useMemo(() => insightsQuery, [insightsQuery]);
  const memoizedMusicQuery = useMemo(() => musicQuery, [musicQuery]);
  const memoizedCategoryInsightData = useMemo(() => categoryInsightData, [categoryInsightData]);
  const memoizedTestimonialQuery = useMemo(() => testimonialQuery, [testimonialQuery]);
  const memoizedSearchData = useMemo(() => searchData, [searchData]);
  const memoizedContactQuery = useMemo(() => contactQuery, [contactQuery]);
  const memoizedAboutQuery = useMemo(() => aboutQuery, [aboutQuery]);
  const memoizedAdvertiseQuery = useMemo(() => advertiseQuery, [advertiseQuery]);

  return (
    <DialogContext.Provider
      value={{
        categoryData,
        posts: memoizedPosts,
        setPosts,
        cursor: memoizedCursor,
        setCursor,
        setNodeByUri,
        nodeByUri: memoizedNodeByUri,
        isDialogOpen,
        openDialog,
        closeDialog,
        uri,
        contactQuery: memoizedContactQuery,
        loadingCategory,
        fetchMore,
        insightFetchMore,
        bannerData: memoizedBannerData,
        bannerLoading,
        bannerError,
        insightsQuery: memoizedInsightsQuery,
        insightsLoading,
        insightsError,
        musicQuery: memoizedMusicQuery,
        musicLoading,
        musicError,
        categoryInsightData: memoizedCategoryInsightData,
        categoryLoading,
        categoryError,
        testimonialQuery: memoizedTestimonialQuery,
        searchData: memoizedSearchData,
        searchFetch,
        loadingSearch,
        errorSearch,
        aboutQuery: memoizedAboutQuery,
        aboutLoading,
        advertiseQuery: memoizedAdvertiseQuery,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
