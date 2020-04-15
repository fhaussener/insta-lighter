import React from 'react';
import styles from "./InstaChip.module.css";

const InstaChip = ({ onClose, username }) => {
  return (
    <div className={styles.container}>
      <span className={styles.close} onClick={onClose}></span>
      <span className={styles.insta}></span>
      <span>{username}</span>
    </div>
  );
}

export default InstaChip;

