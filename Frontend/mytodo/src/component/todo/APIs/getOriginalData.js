const getOriginalData = async (
  getData,
  setData,
  setEmptyChecker,
  setLoader
) => {
  try {
    setLoader(true);
    const data = await getData("http://localhost:8080/todo/tasks");
    const planeData = await data.json();
    setLoader(false);
    if (planeData.status == 500) setEmptyChecker(true);
    planeData[0] && setData([...planeData]);
    return planeData;
  } catch (error) {
    console.log(error);
  }
};

export { getOriginalData };
