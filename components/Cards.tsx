import { Dispatch, SetStateAction } from "react";
import Card from "./Card";
import styles from "@/styles/card.module.css";

interface Props {
  selectedWords: string[];
  setSelectedWords: Dispatch<SetStateAction<string[]>>;
}

export default function Cards({ selectedWords, setSelectedWords }: Props) {
  const words: string[] = [
    "Cat",
    "Giant",
    "Sneeze",
    "Sun",
    "Tree",
    "Pluton",
    "Flying",
  ];
  return (
    <>
      <div className={styles.card_container}>
        {words.map((word, index) => {
          return (
            <Card
              key={index}
              word={word}
              selectedWords={selectedWords}
              setSelectedWords={setSelectedWords}
            />
          );
        })}
      </div>
    </>
  );
}
