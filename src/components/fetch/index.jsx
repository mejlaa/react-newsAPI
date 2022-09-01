import { useEffect, useState } from "react";
import newsApi from "../../api/data";

const Main = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const result = await newsApi.get(
        "/v2/everything?q=bitcoin&apiKey=3c3f199965b54fd9838ec9c0241e81c3"
      );
      console.log(result);
      const data = result.data;
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(news);

  return <div></div>;
};

export default Main;
