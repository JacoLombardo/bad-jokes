import { Dispatch, SetStateAction } from "react";
import Card from "./Card";
import styles from "@/styles/card.module.css";

interface Props {
  selectedWords: string[];
  setSelectedWords: Dispatch<SetStateAction<string[]>>;
}

export default function Cards({ selectedWords, setSelectedWords }: Props) {
  const words: string[] = [
    "cat",
    "giant",
    "sneeze",
    "sun",
    "tree",
    "pluton",
    "flying",
  ];
  return (
    <>
      <div className={styles.card_container}>
        {words.map((word, index) => {
          return (
            <Card key={index} word={word} setSelectedWords={setSelectedWords} />
          );
        })}
      </div>
    </>
  );
}
