import styles from "@/styles/general.module.css";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setGo: Dispatch<SetStateAction<boolean>>;
}

export default function Intro({ setGo }: Props) {
  return (
    <>
      <div className={styles.intro_div}>
        <div>
          <p>
            Do you want to soffocate your friends with horrible jokes but none
            come to mind?
          </p>
          <p>Then you are in the right place.</p>
        </div>
        <a
          onClick={() => {
            setGo(true);
          }}
          className={styles.intro_go}
        >
          {/* <Image
            src={
              "https://res.cloudinary.com/dtl48kr1u/image/upload/v1698932768/bad-jokes/Avatar/head2_qhf6zd.png"
            }
            title="Go!"
            alt="Go!"
            width={"150"}
            height={"150"}
            className={styles.intro_avatar}
          /> */}
          <div className={styles.intro_avatar}></div>
        </a>
      </div>
    </>
  );
}
