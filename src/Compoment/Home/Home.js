import styles from "./Home.module.css";
import img from "./logo.svg";
import logout from "./logout.jpg";
import setting from "./setting.jpg";

export default function App() {
  return (
    <div>
      <div className={styles.sidebar}>
        <div className={styles.img}>
          <img src={img} alt="img" />
        </div>

        <div className={styles.btn}>
          <button> Add File</button>
          <button> Add Folder</button>
        </div>

        <div className={styles.lock1}>
          <button className={styles.lock}> Lock Now </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.nav1}>
          <div className={styles.setting}>
            <img src={setting} alt="img" />
          </div>
          <div className={styles.logout}>
            <img src={logout} alt="img" />
          </div>
        </div>
        <hr />
        <p> My name is Agam </p>
      </div>
    </div>
  );
}
