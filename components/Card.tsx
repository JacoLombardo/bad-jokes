import styles from "@/styles/card.module.css";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  word: string;
  selectedWords: string[];
  setSelectedWords: Dispatch<SetStateAction<string[]>>;
}

export default function Card({ word, selectedWords, setSelectedWords }: Props) {
  const [showError, setShowError] = useState<boolean>(false);

  const selectWord = () => {
    if (selectedWords.length <= 2 && !selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    } else if (selectedWords.includes(word)) {
      setSelectedWords((current) =>
        current.filter((wordz) => {
          return wordz !== word;
        })
      );
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 1000);
    }
  };

  return (
    <>
      <a onClick={selectWord}>
        <div
          className={styles.card}
          style={
            selectedWords.includes(word)
              ? { backgroundColor: "#404040", color: "white" }
              : {}
          }
        >
          <h1 className={styles.card_title}>{word}</h1>
          {showError && (
            <span className={styles.tooltiptext}>Max words number reached</span>
          )}
        </div>
      </a>
    </>
  );
}
