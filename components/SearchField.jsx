import React from 'react';
import styles from "./SearchField.module.css";

const SearchField = ({ onGenerate }) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label for="instaName">What is your instagram username?</label><br></br>
        <input type="text" id="instaName" className={styles.inputField} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <button className={styles.button} onClick={() => onGenerate(inputValue)}>Generate lighter</button>
    </div>
  );
}

export default SearchField;

