import Card from "./Card";
import styles from "@/styles/card.module.css";

export default function Cards() {
  const words: string[] = ["cat", "giant", "sneezing", "sun"];
  return (
    <>
      <div className={styles.card_container}>
        {words.map((word, index) => {
          return <Card key={index} word={word} />;
        })}
      </div>
    </>
  );
}
