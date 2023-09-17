import ArrangeTask from "./ArrangeTask";
import Styles from "./styles/main.module.css";
export default function RenderTask({ data }) {
  return (
    <div id={Styles.gridshow}>
      {data && data.map((task) => <ArrangeTask task={task} />)}
    </div>
  );
}
