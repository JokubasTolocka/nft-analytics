import { NumericalData } from '../../../graphql/generated/types';

const useGraphData = (data: NumericalData[], title: string) => {
  const getFormattedData = () => {
    const dataCopy = [...data];

    const formattedData = dataCopy.map((value) => {
      const timeOfObtain = new Date(Date.parse(value.time));

      const hour = timeOfObtain.getHours();
      const minute = timeOfObtain.getMinutes();
      const second = timeOfObtain.getSeconds();

      return {
        name: hour,
        [title]: value.data,
        Hour: `${hour}:${minute}:${second}`
      };
    });

    return formattedData;
  };

  return getFormattedData();
};

export default useGraphData;
