export default function prioritySorter(setSorter, data, setData) {
  const sortByPriority = [...data];
  sortByPriority.sort((a, b) => {
    if (
      (a.taskPriority == "HIGH" && b.taskPriority == "MEDIUM") ||
      b.taskPriority == "LOW"
    )
      return -1;
    else if (a.taskPriority == "MEDIUM" && b.taskPriority == "LOW") return -1;
    else if (a.taskPriority == "MEDIUM" && b.taskPriority == "HIGH") return 1;
    return 1;
  });

  console.log(sortByPriority);
  setData([...sortByPriority]);

  setSorter("");
}
