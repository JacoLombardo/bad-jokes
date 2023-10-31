import styles from "@/styles/card.module.css";
import { Dispatch, SetStateAction } from "react";

interface Props {
  word: string;
  setSelectedWords: Dispatch<SetStateAction<string[]>>;
}

export default function Card({ word, setSelectedWords }: Props) {
  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.card_title}>{word}</h1>
      </div>
    </>
  );
}
