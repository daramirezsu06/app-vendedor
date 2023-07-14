import styles from "./boton.module.css";
export default function Boton() {
  return (
    <div className={styles.botones}>
      <button>Agregar nuevo usuario</button>
      <button>Filtrar</button>
    </div>
  );
}
