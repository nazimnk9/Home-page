import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Navbar";
import Service from "@/Service";
import Details from "@/Details";
import Work from "@/Work";
import Process from "@/Process";
import Clients from "@/Clients";
import Members from "@/Members";
import FAQ from "@/FAQ";
import ContactFooter from "@/ContactFooter";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Service />
      <Details />
      <Work />
      <Process />
      <Clients />
      <Members />
      <FAQ />
      <ContactFooter />
    </main>
  );
}
