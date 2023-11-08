import styles from "@/styles/general.module.css";
import Image from "next/image";

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
              className={styles.github_link}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dtl48kr1u/image/upload/v1699266007/bad-jokes/Icons/github-hover_gl53oh.png"
                }
                title={"github"}
                alt={"github"}
                width={50}
                height={50}
                sizes="100vw"
                priority={true}
                className={styles.github}
              />
              <Image
                src={
                  "https://res.cloudinary.com/dtl48kr1u/image/upload/v1699266007/bad-jokes/Icons/github_tmtdhi.png"
                }
                title={"github"}
                alt={"github"}
                width={50}
                height={50}
                sizes="100vw"
                priority={true}
                className={styles.github_on}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jacopo-lombardo/"
              target="_blank"
              className={styles.linkedin_link}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dtl48kr1u/image/upload/v1699266007/bad-jokes/Icons/linkedin-hover_dbf5jc.png"
                }
                title={"linkedin"}
                alt={"linkedin"}
                width={50}
                height={50}
                sizes="100vw"
                priority={true}
                className={styles.linkedin}
              />
              <Image
                src={
                  "https://res.cloudinary.com/dtl48kr1u/image/upload/v1699266007/bad-jokes/Icons/linkedin_nnkfyz.png"
                }
                title={"linkedin"}
                alt={"linkedin"}
                width={50}
                height={50}
                sizes="100vw"
                priority={true}
                className={styles.linkedin_on}
              />
            </a>
            <a
              href="mailto:jacopo.lombardo@outlook.com"
              target="_blank"
              className={styles.mail_link}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dtl48kr1u/image/upload/v1699266007/bad-jokes/Icons/speech-bubble_klrxpe.png"
                }
                title={"mail"}
                alt={"mail"}
                width={50}
                height={50}
                sizes="100vw"
                priority={true}
                className={styles.mail}
              />
              <Image
                src={
                  "https://res.cloudinary.com/dtl48kr1u/image/upload/v1699266007/bad-jokes/Icons/speech-bubble-hover_xjyjkx.png"
                }
                title={"mail"}
                alt={"mail"}
                width={50}
                height={50}
                sizes="100vw"
                priority={true}
                className={styles.mail_on}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
