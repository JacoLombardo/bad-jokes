import Avatar from "@/components/Avatar";
import Cards from "@/components/Cards";
import Intro from "@/components/Intro";
import { useState } from "react";
import styles from "@/styles/general.module.css";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [go, setGo] = useState<boolean>(false);
  return (
    <>
      <h1 className={styles.title}>Bad Jokes Generator</h1>
      {!go && <Intro setGo={setGo} />}
      {go && (
        <div>
          <Avatar selectedWords={selectedWords} />
          <Cards
            selectedWords={selectedWords}
            setSelectedWords={setSelectedWords}
          />
          <Footer />
        </div>
      )}
    </>
  );
}
