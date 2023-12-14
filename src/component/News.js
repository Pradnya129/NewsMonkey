import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import "../App.css";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const newsUpdate = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(60);
    let response = await fetch(url);
    props.setProgress(80);
    let data = await response.json();
    setArticles(data.articles);
    setLoading(false);
    setTotalResults(data.totalResults);
    props.setProgress(100);

 
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    newsUpdate();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=6b1e8dd06e624675bd1c0f117fe01cee&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let response = await fetch(url);
    let data = await response.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  return (
    <>
   
      <h1 className="text-center  my-4">
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      {articles && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults - 1}
          loader={<Spinner />}
        >
         

          <div className="card-container me-4">
            <div className="row mx-2  ">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      source={element.source.name}
                      author={element.author ? element.author : "Unknown"}
                      date={element.publishedAt}
                      description={
                        element.description
                          ? element.description.slice(0, 85)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 20,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
