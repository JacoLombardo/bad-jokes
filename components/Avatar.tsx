import Image from "next/image";
import styles from "@/styles/card.module.css";
import { useState } from "react";

interface Props {
  selectedWords: string[];
  joke: string | null;
  getJoke: Function;
}

export default function Avatar({ selectedWords, joke, getJoke }: Props) {
  const [showError, setShowError] = useState<boolean>(false);

  const getJokeHandler = () => {
    if (selectedWords.length < 2) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 1000);
    } else {
      getJoke();
    }
  };
  return (
    <>
      <div className={styles.avatar_container}>
        <div className={styles.avatar}>
          <Image
            src={
              "https://res.cloudinary.com/dtl48kr1u/image/upload/v1698932768/bad-jokes/Avatar/good_op827j.png"
            }
            title="Avatar"
            alt="Avatar"
            width={"150"}
            height={"150"}
          />
          {selectedWords[0] && (
            <span
              className={styles.lettering0}
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
              className={styles.lettering1}
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
              className={styles.lettering2}
              style={{
                top: "15%",
                right: "100%",
              }}
            >
              {selectedWords[2]}
            </span>
          )}
        </div>
        {/* {joke && (
          <div className={styles.joke_div}>
            <h4>{joke}</h4>
          </div>
        )} */}

        {/* {joke && (
          <div className={styles.joke_div}>
            <Image
              src={"/Media/balloon.png"}
              title="Avatar"
              alt="Avatar"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "600px",
                height: "350px",
              }}
            />
            <h4>{joke}</h4>
          </div>
        )} */}

        <a onClick={getJokeHandler} className={styles.go}>
          {showError && (
            <span className={styles.tooltiptext}>
              Select at least two words
            </span>
          )}
          <h1>GO!</h1>
        </a>
      </div>
    </>
  );
}
