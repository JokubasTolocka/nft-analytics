import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { NumericalData } from '../../../graphql/generated/types';
import PriceMovement from '../Home/PriceMovement';
import useGraphData from './useGraphData';

export interface LineGraphProps {
  title: string;
  data: NumericalData[];
  isVolume?: boolean;
}

export const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-dark-90 p-2">
        <span className="text-xl mx-auto w-full">{label}</span>
        {payload.map((pld) => {
          const keys = Object.keys(pld.payload);
          const values: (string | number)[] = Object.values(pld.payload);

          return keys.map((key, index) => {
            if (key === 'name') return null;

            let value = values[index] as string | number;

            if (typeof value === 'number') value = value.toFixed(4);

            return (
              <div key={index}>
                <div className="flex space-x-1 truncate">
                  <b>{key}: </b>
                  <span>{value}</span>
                </div>
              </div>
            );
          });
        })}
      </div>
    );
  }

  return null;
};

const LineGraph = ({ title, data, isVolume = false }: LineGraphProps) => {
  const formattedData = useGraphData(data, title);

  const Xlabel = { value: 'Hour', position: 'bottom' };

  return (
    <div className="border rounded-2xl border-dark-40 py-6 flex-1">
      <div className="flex justify-between px-6">
        <span className="font-medium text-lg">{title}</span>
        {!isVolume && <PriceMovement pastPriceArray={data} />}
      </div>
      <div className="h-[160px] mt-6">
        <ResponsiveContainer height="100%">
          <LineChart data={formattedData} margin={{ right: 30, bottom: 20 }}>
            <CartesianGrid horizontal={false} stroke="#95959B" />
            <XAxis dataKey="name" label={Xlabel} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey={title} stroke="#6767F1" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;
