import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Navbar";
import Service from "@/Service";
import Details from "@/Details";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Service />
      <Details />
    </main>
  );
}
