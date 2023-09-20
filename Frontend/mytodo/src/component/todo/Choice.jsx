import { getOriginalData } from "./APIs/getOriginalData";
import Styles from "./styles/main.module.css";
export default function Choice({
  data,
  setData,
  getData,
  setCheckedData,
  setEmptyChecker,
  setLoader,
}) {
  const filterTask = async (status) => {
    let impData = [];
    impData = data.filter((task) => task[status]);
    impData.length === 0
      ? setEmptyChecker(true)
      : setCheckedData(impData) && setEmptyChecker(false);
  };

  return (
    <div className={Styles.choosebutton}>
      <button
        className={Styles.leftbuttons}
        onClick={() => {
          setEmptyChecker(false);
          setCheckedData(null);
          getOriginalData(getData, setData, setEmptyChecker, setLoader);
        }}
      >
        All
      </button>
      <button
        onClick={() => filterTask("favorite")}
        className={Styles.leftbuttons}
      >
        Important
      </button>
      <button
        onClick={() => filterTask("complete")}
        className={Styles.leftbuttons}
      >
        Completed
      </button>
      <button
        onClick={() => filterTask("deleted")}
        className={Styles.leftbuttons}
      >
        Trash
      </button>
    </div>
  );
}
