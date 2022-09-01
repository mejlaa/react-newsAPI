import style from "./card.module.css";

const CardNews = (props) => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <img src={props.img} alt="img" />
        <h3>{props.title}</h3>
        <p>{props.newsDesc}</p>
        <button>Read all</button>
      </div>
    </div>
  );
};

export default CardNews;
