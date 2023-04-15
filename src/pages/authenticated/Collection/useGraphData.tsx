const useGraphData = (data: number[], title: string, isVolume?: boolean) => {
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

  const getInitialHour = (hoursAgo: number) => {
    const currentHour = new Date().getHours();

    let hourAgo = currentHour - hoursAgo;

    if (hourAgo < 0) hourAgo += 24;
    else if (hourAgo >= 24) hourAgo -= 24;

    return hourAgo;
  };

  const getVolumeData = () => {
    const dataCopy = [...data];

    const initialHour = getInitialHour(dataCopy.length - 1);

    const volumeData = data.map((volume, index) => {
      let iterationHour = initialHour + index;

      if (iterationHour > 24) iterationHour -= 24;

      return {
        name: iterationHour.toString(),
        [title]: index === 0 ? 0 : volume - data[index - 1],
        'Total volume': volume
      };
    });

    return volumeData;
  };

  return isVolume ? getVolumeData() : getFormattedData();
};

export default useGraphData;
