import Avatar from "@/components/Avatar";
import Cards from "@/components/Cards";
import Intro from "@/components/Intro";
import { useState } from "react";
import styles from "@/styles/general.module.css";
import Footer from "@/components/Footer";
import { formatJoke } from "@/lib/utils";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function Home() {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [go, setGo] = useState<boolean>(false);
  const [joke, setJoke] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getJoke = async () => {
    try {
      const res = await fetch("/api/completion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ words: selectedWords }).toLowerCase(),
      }).then((res) => res.json());
      console.log(res.data.choices[0].text);
      setJoke(formatJoke(res.data.choices[0].text));
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.title}>
        <Image
          src={"/Media/title.png"}
          title="title"
          alt="title"
          width={"0"}
          height={"0"}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {!go && <Intro setGo={setGo} />}
      {go && (
        <div>
          {isOpen && <Modal setIsOpen={setIsOpen} joke={joke} />}
          <Avatar selectedWords={selectedWords} joke={joke} getJoke={getJoke} />
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
