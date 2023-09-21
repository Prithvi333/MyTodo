export default function idSorter(setSorter, data, setData) {
  const sortById = [...data];

  sortById.sort((a, b) => a.taskId - b.taskId);
  setData([...sortById]);
  setSorter("");
}
