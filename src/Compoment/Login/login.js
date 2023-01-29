import React from "react";
import styles from "./login.module.css";

export default function login() {
  return (
    <div>
      <div className={styles.box}>
        <h4> Enter the Account Pin </h4>
        <div className={styles.input}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <button> Enter </button>
      </div>
    </div>
  );
}
