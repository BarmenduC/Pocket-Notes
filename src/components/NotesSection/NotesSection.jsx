import React from "react";
import styles from "./NotesSection.module.css";
import centerImage from "../../assets/image-removebg-preview 1.png";
import lockImage from '../../assets/lock-image.png'

const NotesSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centerImageContainer}>
        <img src={centerImage} className={styles.centerImage} alt="" />
        <h1 className={styles.heading}>Pocket Notes</h1>
        <p className={styles.subHeading}>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.footer}>
        <img className={styles.footerImage} src={lockImage} alt="" />
        <p className={styles.footerText}>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default NotesSection;
