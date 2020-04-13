import React from 'react';
import styles from "./Lighter.module.css";

const Lighter = ({ selectedColor, pictureUrl, accountName }) => {
  return (
    <div>
      <div style={{ "backgroundImage": `url(/images/lighter_${selectedColor}.png)` }} className={styles.lighterImage}>
        <div className={styles.overlayContainer}>
          <div style={{ "backgroundImage": `url(${pictureUrl})` }} className={styles.storyCircle}>
          </div>
          <div style={{ "color": selectedColor === "black" ? "white" : "black" }} className={styles.account}>@{accountName}</div>
        </div>
      </div>
    </div>
  );
}

export default Lighter;

