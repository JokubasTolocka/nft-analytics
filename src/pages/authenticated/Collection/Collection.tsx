import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { useGetCollectionQuery } from '../../../graphql/generated/hooks';
import DescriptionBox from './DescriptionBox';
import ErrorMessage from '../../../components/ErrorMessage';
import AssetGrid from '../../../components/TokenGrid';
import TextDivider from '../../../components/TextDivider';
import FavoriteButton from './FavoriteButton';
import { useAuth } from '../../../contexts/Auth/useAuth';
import GraphSection from './GraphSection';
import { useEffect, useState } from 'react';

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
  const { myUser } = useAuth();
  const { collectionSlug } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const { data, loading, error, refetch } = useGetCollectionQuery({
    variables: { collectionSlug: collectionSlug || '' }
  });

  const handleRefresh = (newFavoriteState: boolean) => {
    setIsFavorite(newFavoriteState);
    refetch();
  };

  useEffect(() => {
    // Refetch on page reload to keep data consistent
    refetch();
  }, []);

  useEffect(() => {
    const getIsFavorite = () => {
      const collectionIndex = myUser?.favoritedCollections.findIndex(
        (collectionAddress) => collectionAddress === data?.getCollection.address
      );

      if (collectionIndex === undefined) return false;

      return collectionIndex > -1;
    };

    setIsFavorite(getIsFavorite());
  }, [data]);

  if (error) return <ErrorMessage error={error} />;
  if (loading || !data) return <Loading />;

  const { getCollection: collection } = data;

  const collectionAddress = collection.address;

  return (
    <div className="w-full flex flex-col relative h-full text-white overflow-y-scroll">
      <img alt="bannerImg" src={collection.bannerImage || ''} className="!h-[220px] object-cover w-full" />
      <img
        alt="mainImage"
        src={collection.image || ''}
        className="w-[180px] h-[180px] border-8 border-dark-100 bg-dark-100 rounded-[14px] absolute left-16 top-4 md:top-[72px]"
      />
      <div className="mt-12 mx-16 flex justify-between mb-8">
        <div className="flex flex-col">
          <span className="mb-4 text-[40px]">{collection.name}</span>
          {!!collection.description && <DescriptionBox description={collection.description} />}
        </div>
        <div className="flex flex-col items-end justify-between">
          {!!collectionAddress && (
            <FavoriteButton collectionAddress={collectionAddress} handleRefresh={handleRefresh} />
          )}
          <div className="flex space-x-8">
            <StatsBox stat={`${collection.supply}`} statName="Items" />
            <StatsBox stat={`${collection.floorPrice || 0} ETH`} statName="Floor price" />
            <StatsBox stat={`${collection.volume ? Math.floor(collection.volume) : 0} ETH`} statName="Total volume" />
          </div>
        </div>
      </div>
      {collectionAddress && isFavorite && <GraphSection address={collectionAddress} />}
      <TextDivider title="Items" className="mx-16" />
      <AssetGrid assets={collection.assets} className="mx-16" />
    </div>
  );
};

export default Collection;
