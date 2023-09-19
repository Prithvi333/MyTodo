import { getOriginalData } from "./APIs/getOriginalData";
import Styles from "./styles/main.module.css";
export default function Choice({ data, setData, getData }) {
  const filterTask = async (status) => {
    const impData = data.filter((task) => task[status]);
    setData(impData);
  };

  return (
    <div className={Styles.choosebutton}>
      <button
        className={Styles.leftbuttons}
        onClick={() => getOriginalData(getData, setData)}
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
