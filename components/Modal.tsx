import styles from "@/styles/modal.module.css";
import Image from "next/image";

export default function Modal({ setIsOpen, joke }: any) {
  return (
    <>
      <div
        className={styles.modal_background}
        onClick={() => setIsOpen(false)}
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
          style={{
            width: "1000px",
            height: "650px",
          }}
        />
        <div>
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
