import { useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading/Loading';
import { useGetCollectionQuery } from '../../../graphql/generated/hooks';
import { ReactComponent as Star } from '../../../assets/icons/Star.svg';
import DescriptionBox from './DescriptionBox';
import ErrorMessage from '../../../components/ErrorMessage';

interface StatsBoxProps {
  stat: string;
  statName: string;
}

const StatsBox = ({ stat, statName }: StatsBoxProps) => (
  <div className="flex flex-col items-center whitespace-nowrap">
    <span className="text-2xl ml-1">{stat}</span>
    <span className="text-dark-40 text-lg">{statName}</span>
  </div>
);

const Collection = () => {
  const { collectionSlug } = useParams();

  const { data, loading, error } = useGetCollectionQuery({ variables: { collectionSlug: collectionSlug || '' } });

  if (error) return <ErrorMessage error={error} />;
  if (loading || !data) return <Loading />;

  const { getCollection: collection } = data;

  return (
    <div className="w-full flex flex-col relative h-full text-white overflow-y-scroll">
      <img alt="bannerImg" src={collection.bannerImage} className="h-[220px] object-cover" />
      <img
        alt="mainImage"
        src={collection.image}
        className="w-[180px] h-[180px] border-8 border-dark-100 rounded-[14px] absolute left-16 top-[72px]"
      />
      <div className="mt-12 mx-16 flex justify-between mb-8">
        <div className="flex flex-col">
          <span className="mb-4 text-[40px]">{collection.name}</span>
          <DescriptionBox description={collection.description} />
        </div>
        <div className="flex flex-col items-end justify-between">
          <Button onClick={() => console.log('favorite')}>
            <Star /> <span>Favorite</span>
          </Button>
          <div className="flex space-x-8">
            <StatsBox stat={`${collection.supply}`} statName="Items" />
            <StatsBox stat={`${collection.floorPrice} ETH`} statName="Floor price" />
            <StatsBox stat={`${Math.floor(collection.volume)} ETH`} statName="Total volume" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-[14px] mx-16">
        <span className="text-2xl text-dark-40">Items</span>
        <div className="w-full h-px bg-dark-40" />
      </div>
      <div className="grid xl:grid-cols-5 grid-cols-3 mt-6 mx-16 gap-x-6 gap-y-12 mb-16">
        {collection.assets.map(({ name, image }) => (
          <div key={name} className="flex flex-col">
            <img src={image} alt={name} className="rounded-2xl" />
            <span className="ml-3 !mt-4 font-medium text-lg">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
