import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/context";
import style from "./card.module.css";

const CardNews = (props) => {
  const { setImg, setTitle, setDesc, setAuthor } = useContext(MyContext);
  const propsHandler = () => {
    setImg(props.img);
    setTitle(props.title);
    setDesc(props.newsDesc);
    setAuthor(props.author);
  };

  return (
    <div className={style.card}>
      <img src={props.img} alt="img" />
      <h3>{props.title}</h3>
      <p>{props.newsDesc}</p>
      <button onClick={propsHandler}>
        <Link to="/article">Read all</Link>
      </button>
    </div>
  );
};

export default CardNews;
