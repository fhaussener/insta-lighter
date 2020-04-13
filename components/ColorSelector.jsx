import React from 'react';
import styles from "./ColorSelector.module.css";

const ColorSelector = ({ onChange, selected }) => {
  return (
    <div>
      <div className={selected == "white" ? styles.selected : ""} onClick={() => onChange("white")}>white</div>
      <div className={selected == "black" ? styles.selected : ""} onClick={() => onChange("black")}>black</div>
    </div>
  );
}

export default ColorSelector;

