import Image from "next/image";
import styles from "@/styles/card.module.css";

interface Props {
  selectedWords: string[];
}

export default function Avatar({ selectedWords }: Props) {
  return (
    <>
      <div className={styles.avatar_container}>
        <div className={styles.avatar}>
          <Image
            src={"/Media/Avatar/stressed.png"}
            title="test"
            alt="test"
            width={"150"}
            height={"150"}
          />
          {selectedWords[0] && (
            <span
              className={styles.tooltiptext0}
              style={{
                top: "-40%",
                left: "30%",
              }}
            >
              {selectedWords[0]}
            </span>
          )}
          {selectedWords[1] && (
            <span
              className={styles.tooltiptext1}
              style={{
                top: "15%",
                left: "110%",
              }}
            >
              {selectedWords[1]}
            </span>
          )}
          {selectedWords[2] && (
            <span
              className={styles.tooltiptext2}
              style={{
                top: "15%",
                right: "100%",
              }}
            >
              {selectedWords[2]}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          console.log("selectedWords", selectedWords);
        }}
      >
        Selected
      </button>
    </>
  );
}
