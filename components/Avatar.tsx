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
            src={"/Media/Avatar/good.png"}
            title="test"
            alt="test"
            width={"150"}
            height={"150"}
          />
          {selectedWords[0] && (
            <span
              className={styles.tooltiptext}
              style={{
                //   bottom: "150%",
                top: "-30%",
                left: "20%",
              }}
            >
              {selectedWords[0]}
            </span>
          )}
          {selectedWords[1] && (
            <span
              className={styles.tooltiptext}
              style={{
                top: "40%",
                left: "110%",
              }}
            >
              {selectedWords[1]}
            </span>
          )}
          {selectedWords[2] && (
            <span
              className={styles.tooltiptext}
              style={{
                top: "40%",
                right: "110%",
              }}
            >
              {selectedWords[2]}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
