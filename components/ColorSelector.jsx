import React from 'react';
import styles from "./ColorSelector.module.css";

const ColorSelector = ({ onChange, selected }) => {
  return (
    <div className={styles.container}>
      <div onClick={() => onChange("white")}>
        <div style={{ "border": selected == "white" ? "3px solid #2C96EA" : "3px solid transparent" }} className={styles.circleWhite}></div>
        white
      </div>
      <div onClick={() => onChange("black")}>
        <div style={{ "border": selected == "black" ? "3px solid #2C96EA" : "3px solid transparent" }} className={styles.circleBlack}></div>
        black
        </div>
    </div>
  );
}

export default ColorSelector;

