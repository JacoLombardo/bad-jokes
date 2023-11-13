import { Dispatch, SetStateAction } from "react";
import Card from "./Card";
import styles from "@/styles/card.module.css";

interface Props {
  selectedWords: string[];
  setSelectedWords: Dispatch<SetStateAction<string[]>>;
}

export default function Cards({ selectedWords, setSelectedWords }: Props) {
  const words: string[] = [
    "Queen",
    "Giant",
    "Sneeze",
    "Sun",
    "Tequila",
    "Dad",
    "Surf",
    "Carrot",
    "Devil",
    "Toy",
    "Crocs",
    "Monkey",
    "T-Rex",
    "Leggins",
    "Spring",
    "Bubbles",
    "Spaghetti",
    "Ball",
    "Robot",
    "Pan",
    "WC",
    "Lollipop",
    "Castle",
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
