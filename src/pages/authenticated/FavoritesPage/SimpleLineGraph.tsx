import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { LineGraphProps } from '../Collection/LineGraph';
import useGraphData from '../Collection/useGraphData';

const SimpleLineGraph = ({ title, data, isVolume = false }: LineGraphProps) => {
  const formattedData = useGraphData(data, title, isVolume);

  return (
    <div className="h-[64px] w-[120px] mt-6">
      <ResponsiveContainer height="100%">
        <LineChart data={formattedData} margin={{ right: 30, bottom: 20 }}>
          <Line type="monotone" dataKey={title} stroke="#6767F1" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineGraph;
