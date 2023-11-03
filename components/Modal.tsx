import styles from "@/styles/modal.module.css";
import Image from "next/image";

export default function Modal({ setIsOpen, joke }: any) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div>
          <Image
            src={"/Media/balloon.png"}
            title="Avatar"
            alt="Avatar"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "1300px",
              height: "850px",
            }}
          />
          <h4>{joke}</h4>
        </div>

        <button
          className={styles.close_button}
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </div>
    </>
  );
}
