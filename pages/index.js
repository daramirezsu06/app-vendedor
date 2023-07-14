import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "../components/nav";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "../components/LocalStorageFunctions";

export default function Home() {
  return (
    <div>
      <Nav />
    </div>
  );
}
