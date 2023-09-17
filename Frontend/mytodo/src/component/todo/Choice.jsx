import Styles from "./styles/main.module.css";
export default function Choice() {
  return (
    <div className={Styles.choosebutton}>
      <p>All</p>
      <p>Important</p>
      <p>Completed</p>
      <p>Trash</p>
    </div>
  );
}
