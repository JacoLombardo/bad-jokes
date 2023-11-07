import styles from "@/styles/modal.module.css";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  joke: string | null;
  setAvatarSelect: Dispatch<SetStateAction<string>>;
  setSelectedWords: Dispatch<SetStateAction<string[]>>;
}

export default function Modal({
  setIsOpen,
  joke,
  setAvatarSelect,
  setSelectedWords,
}: Props) {
  return (
    <>
      <div
        className={styles.modal_background}
        onClick={() => {
          setIsOpen(false);
          setAvatarSelect("good");
        }}
      />
      <div className={styles.modal}>
        <Image
          src={
            "https://res.cloudinary.com/dtl48kr1u/image/upload/v1699006524/bad-jokes/balloon_hrsfyq.png"
          }
          title="Avatar"
          alt="Avatar"
          width="0"
          height="0"
          sizes="100vw"
          className={styles.modal_balloon}
        />
        <div>
          <h4>{joke}</h4>
        </div>

        <button
          className={styles.close_button}
          onClick={() => {
            setIsOpen(false);
            setAvatarSelect("good");
            document.body.style.overflow = "unset";
            setSelectedWords([]);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
