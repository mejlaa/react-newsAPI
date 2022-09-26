import { useEffect, useState } from "react";
import newsApi from "../../api/data";
import CardNews from "../Card/card";
import style from "../Card/card.module.css";

const Main = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");
  const [page, setPage] = useState(1);

  // FETCH
  const fetchNews = async () => {
    try {
      let result;
      if (search === "") {
        result = await newsApi.get(
          `/v2/top-headlines?country=rs&pageSize=20&page=${page}&apiKey=327631f3d6b64e2b85fde69886dbe425`
        );
        console.log("prvo");
      } else {
        result = await newsApi.get(
          `/v2/everything?q=${search}&sortBy=${sortBy}&pageSize=20&page=${page}&apiKey=327631f3d6b64e2b85fde69886dbe425`
        );
        console.log("object");
      }
      const data = result.data;
      setNews([...news, ...data.articles]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [search, sortBy, page]);

  console.log(news);

  //SEARCH

  const searchInputHandler = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      setNews([]);
    }
  };

  const loadMoreHandler = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className={style.searchDiv}>
        <input onKeyPress={searchInputHandler} />
        {search ? (
          <div>
            Sorted by:
            <p
              onClick={() => {
                setSortBy("publishedAt");
                setNews([]);
              }}
            >
              Published at
            </p>
            <p
              onClick={() => {
                setSortBy("relevancy");
                setNews([]);
              }}
            >
              Popularity
            </p>
            <p
              onClick={() => {
                setSortBy("popularity");
                setNews([]);
              }}
            >
              Relevancy
            </p>{" "}
          </div>
        ) : null}
      </div>
      <div className={style.main}>
        {news.map((item, index) => {
          return (
            <CardNews
              key={index}
              title={item.title}
              img={item.urlToImage}
              newsDesc={item.description}
              author={item.author}
            />
          );
        })}
      </div>
      {news.length < 20 ? null : (
        <button onClick={loadMoreHandler}>MORE LOAD...</button>
      )}
    </div>
  );
};

export default Main;
