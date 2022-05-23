import style from "./SinglePriceItem.module.css";

export default function SinglePriceItem(props) {
  return (
    <div className={style.container}>
      <p className={style.name}>{props.name}</p> 
      <div className={style.dottedLine}></div>
      <p className={style.price}>{`${props.price} zł/kg`}</p>
    </div>
  );
}
