import styles from "@/styles/general.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <hr />
        <div className={styles.footer}>
          <div>
            <p style={{ fontSize: "25px", marginBottom: "0px" }}>
              Very Bad Jokes
            </p>
            <p>(Bad) Jokes generator developed using the OpenAI API.</p>
          </div>
          <div className={styles.icons_div}>
            <a
              href="https://github.com/JacoLombardo"
              target="_blank"
              className={styles.github}
            >
              <div></div>
            </a>
            <a
              href="https://www.linkedin.com/in/jacopo-lombardo/"
              target="_blank"
              className={styles.linkedin}
            >
              <div></div>
            </a>
            <a
              href="mailto:jacopo.lombardo@outlook.com"
              target="_blank"
              className={styles.mail}
            >
              <div></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
