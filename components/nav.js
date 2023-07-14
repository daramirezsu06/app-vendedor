import Link from "next/link";
import style from "./nav.module.css";
export default function Nav({ children }) {
  return (
    <nav>
      <ul className={style.ulClass}>
        <li>
          <Link href="/posts/ventas">Ventas</Link>
        </li>
        <li>
          <Link href="/posts/clientes">Clientes</Link>
        </li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}
