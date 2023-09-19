const getOriginalData = async (getData, setData) => {
  try {
    const data = await getData("http://localhost:8080/todo/tasks");
    const planeData = await data.json();

    setData(planeData);
  } catch (error) {
    console.log(error);
  }
};

export { getOriginalData };
