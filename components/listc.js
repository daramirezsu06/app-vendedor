import style from "./listc.module.css";
export default function ListC(props) {
  return (
    <div className={style.card}>
      <h3>{props.name}</h3>
      <p>{props.direccion}</p>
      <a href={props.ubicacion}>ver ubicacion</a>
      <p>Tel: {props.tel}</p>
      <p>Mail: {props.mail}</p>
    </div>
  );
}
