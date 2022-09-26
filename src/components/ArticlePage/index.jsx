import { useContext } from "react";
import { MyContext } from "../Context/context";

const ArticlePage = () => {
  const { img, title, desc, author } = useContext(MyContext);
  return (
    <div>
      <img src={img} />
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{author}</p>
    </div>
  );
};

export default ArticlePage;
