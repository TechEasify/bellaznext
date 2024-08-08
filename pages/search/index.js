import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDialog } from "../../components/DialogContext";
import Nav from "../../components/Nav";
import Primarylogo from "../../public/images/Primarylogo.svg";
import Footer from "../../components/Footer";
import debounce from "lodash.debounce";
import Layout from "../../components/Layout";

const customLoader = ({ src }) => {
  return src;
};

const SearchPage = () => {
  const {
    setCursor,
    cursor,
    setPosts,
    posts,
    categoryError,
    iconDataResult,
    categoryLoading,
    nodeByUri,
    insightFetchMore,
    dataIcon,
    searchData,
    searchFetch,
    loadingSearch,
    errorSearch,
  } = useDialog();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if (searchData?.categories?.nodes) {
      const initialPosts = searchData?.categories?.nodes.flatMap(
        (category) => category.posts.nodes
      );
      setPosts(initialPosts);
      setCursor(searchData.categories.pageInfo.endCursor);
      setHasNextPage(searchData.categories.pageInfo.hasNextPage);
    }
  }, [searchData]);

  useEffect(() => {
    const storedTerm = localStorage.getItem("searchTerm");
    if (storedTerm) {
      setSearchTerm(storedTerm);
      localStorage.removeItem("searchTerm");
    }
  }, []);

  const handleSearch = useCallback(
    debounce((term) => {
      if (term) {
        const lowerCaseTerm = term.toLowerCase();
        const filtered = posts.filter((post) =>
          post.title.toLowerCase().includes(lowerCaseTerm)
        );
        setFilteredPosts(filtered);
      } else {
        setFilteredPosts(posts);
      }
    }, 300),
    [posts]
  );

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  const handleViewMore = async () => {
    if (hasNextPage && !isLoadingMore) {
      setIsLoadingMore(true); // Set loading state to true
      try {
        const { data } = await searchFetch({
          variables: {
            after: cursor,
          },
        });

        if (data && data.categories.nodes.length > 0) {
          const newPosts = data.categories.nodes.flatMap(
            (item) => item.posts.nodes
          );
          setPosts((prevPosts) => [...prevPosts, ...newPosts]);
          setCursor(data.categories.pageInfo.endCursor);
          setHasNextPage(data.categories.pageInfo.hasNextPage);
        } else {
          setHasNextPage(false); // Set hasNextPage to false when no more posts are available
        }
      } catch (error) {
        console.error("Error fetching more posts:", error);
      } finally {
        setIsLoadingMore(false); // Reset loading state
      }
    }
  };

  if (loadingSearch)
    return (
      <div className="spinner">
        <Image
          priority={true}
          loader={customLoader}
          src={Primarylogo}
          alt="Loading..."
          className="blinking-image"
          width={250}
          height={54}
        />
      </div>
    );
  if (errorSearch) return <p>Error: {errorSearch.message}</p>;

  return (
    <>
      {/* <Nav /> */}
      <Layout>
        <div className="px-4 py-8 mx-auto max-w-screen-xl mt-5">
          <div className="mb-8">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[500px] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type to Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ margin: "0 auto" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0px] gap-6">
            <div className="w-full max-w-5xl mx-auto">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => {
                  const contentText = post?.content
                    ? post?.content.replace(/(<([^>]+)>)/gi, "")
                    : "";
                  const wordCount = contentText
                    ? contentText.split(" ").length
                    : 0;
                  const readingTime =
                    wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
                  const calculateWidth = (text) => {
                    const baseWidth = 50;
                    const charWidth = 10;
                    return `${baseWidth + charWidth * text.length}px`;
                  };
                  const dynamicWidth = calculateWidth(
                    nodeByUri?.nodeByUri?.name || ""
                  );

                  return (
                    <div key={post.id}>
                      <div className="flex flex-col md:flex-row mb-5">
                        <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
                          <Link href={`/news/${post.slug}`} passHref>
                            {post?.featuredImage?.node?.sourceUrl && (
                              <Image
                                priority={true}
                                loader={customLoader}
                                className="object-cover w-[357px] h-[261px]"
                                src={post?.featuredImage?.node?.sourceUrl}
                                alt={post.title}
                                width={357}
                                height={261}
                              />
                            )}
                          </Link>
                        </div>
                        <div className="ml-0 md:ml-5 w-full md:w-3/5">
                          {post?.categories?.nodes?.map((item) => {
                            return (
                              <p
                                key={item.id}
                                className="text-base font-bold text-red-800 mb-2"
                                style={{
                                  background: `${
                                    nodeByUri?.nodeByUri?.categoryTamplate
                                      ?.simpleTemplete
                                      ?.simpleTitleBackgroundColor || "#ce3a42"
                                  }`,
                                  color: "white",
                                  padding: "0 10px",
                                  clipPath:
                                    "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                                  fontSize: "12px",
                                  fontWeight: 500,
                                  letterSpacing: "2px",
                                }}
                              >
                                {item.name}
                              </p>
                            );
                          })}

                          <Link href={`/news/${post.slug}`} passHref>
                            <h5 className="text-[20px] text-black-900 font-bold hover:text-skyBlue">
                              {post.title}
                            </h5>
                          </Link>
                          <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                            <span
                              className="text-[12px] font-extrabold mr-1"
                              style={{ color: "#40A6FB" }}
                            >
                              |
                            </span>
                            By
                            <span
                              className="font-extrabold ml-1"
                              style={{ color: "#40A6FB" }}
                            >
                              {post?.author?.node?.name}
                              <span
                                className="text-[25px] font-extrabold mx-1"
                                style={{ color: "#40A6FB" }}
                              >
                                .
                              </span>
                            </span>
                            {readingTime} MIN READ
                          </p>
                          <p
                            className="text-[15px] text-base font-normal text-gray-600 mb-3"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          />
                        </div>
                      </div>
                      <hr className="my-5" />
                    </div>
                  );
                })
              ) : (
                <h5 className="text-center text-gray-600 text-[30px]">No posts available</h5>
              )}
              <div className="flex justify-center">
                <button
                  className="viewmore w-full py-2 text-center justify-center mt-5 flex mr-2 text-white font-semibold items-center hover:bg-blue-700"
                  onClick={handleViewMore}
                  disabled={!hasNextPage || isLoadingMore}
                >
                  {hasNextPage ? "VIEW MORE" : "NO MORE POSTS"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default SearchPage;
