import styles from "@/styles/card.module.css";

export default function Card({ word }: any) {
  return (
    <>
      <div className={styles.card}>
        <p>{word}</p>
      </div>
    </>
  );
}
