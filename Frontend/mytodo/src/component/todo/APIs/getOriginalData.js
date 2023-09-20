const getOriginalData = async (getData, setData, setEmptyChecker) => {
  try {
    const data = await getData("http://localhost:8080/todo/tasks");
    const planeData = await data.json();
    if (planeData.status == 500) setEmptyChecker(true);
    setData(planeData);
  } catch (error) {
    console.log(error);
  }
};

export { getOriginalData };
