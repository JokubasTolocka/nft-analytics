const useGraphData = (data: number[], title: string) => {
  const getFormattedData = () => {
    const dataCopy = [...data];
    const reversedArray = dataCopy.reverse();

    const currentHour = new Date().getHours();

    const formattedData = reversedArray.map((value, index) => {
      let iterationHour = currentHour - index;

      // If goes back over
      if (iterationHour < 0) iterationHour += 24;

      return {
        name: iterationHour.toString(),
        [title]: value,
        Hour: `${iterationHour}:00:00`
      };
    });

    return formattedData.reverse();
  };

  return getFormattedData();
};

export default useGraphData;
