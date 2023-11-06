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
  const [avatarSelect, setAvatarSelect] = useState<string>("greet");

  const getJoke = async () => {
    try {
      setAvatarSelect("stressed");
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
          src={
            "https://res.cloudinary.com/dtl48kr1u/image/upload/v1699270985/bad-jokes/title2_s1prxl.png"
          }
          title="title"
          alt="title"
          width={"0"}
          height={"0"}
          sizes="100vw"
          className={styles.title_img}
        />
      </div>

      {!go && <Intro setGo={setGo} />}
      {go && (
        <div>
          {isOpen && (
            <Modal
              setIsOpen={setIsOpen}
              joke={joke}
              setAvatarSelect={setAvatarSelect}
            />
          )}
          <div className={styles.instructions}>
            <p>Select up to three words to create your bad joke!</p>
          </div>
          <Avatar
            selectedWords={selectedWords}
            getJoke={getJoke}
            avatarSelect={avatarSelect}
            setAvatarSelect={setAvatarSelect}
          />
          <Cards
            selectedWords={selectedWords}
            setSelectedWords={setSelectedWords}
          />
        </div>
      )}
      <Footer />
    </>
  );
}
