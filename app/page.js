import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Navbar";
import Service from "@/Service";
import Details from "@/Details";
import Work from "@/Work";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Service />
      <Details />
      <Work />
    </main>
  );
}
