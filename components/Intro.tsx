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
          <Image
            src={"/Media/Avatar/head.png"}
            title="test"
            alt="test"
            width={"150"}
            height={"150"}
          />
        </a>
      </div>
    </>
  );
}
