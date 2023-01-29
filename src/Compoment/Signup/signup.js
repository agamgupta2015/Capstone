import React from "react";
import styles from "./signup.module.css";

export default function signup() {
  return (
    <div>
      <div className={styles.box}>
        <h3> Set Pin </h3>
        <div className={styles.new}>
          Enter New pin
          <input type="password" />
        </div>

        <div className={styles.conf}>
          Confirm New pin
          <input type="password" />
        </div>
        <button> Save Changes </button>
      </div>
    </div>
  );
}
