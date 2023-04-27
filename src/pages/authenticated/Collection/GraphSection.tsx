import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import { useGetFavouritedCollectionQuery } from '../../../graphql/generated/hooks';
import LineGraph from './LineGraph';

interface GraphSectionProps {
  address: string;
}

const GraphSection = ({ address }: GraphSectionProps) => {
  const { data, loading, error } = useGetFavouritedCollectionQuery({
    variables: { address }
  });

  if (error) return <ErrorMessage error={error} />;
  if (loading || !data) return <Loading />;

  const floorPrices = data.getFavouritedCollection.pastFloorPriceArray;
  const volumes = data.getFavouritedCollection.pastVolumeArray;

  return (
    <div className="flex mx-16 gap-8 mb-12 mt-3">
      <LineGraph data={floorPrices} title="Floor price" />
      <LineGraph data={volumes} title="Hourly volume" isVolume />
    </div>
  );
};

export default GraphSection;
