import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import { useGetFavoritedCollectionsQuery } from '../../../graphql/generated/hooks';
import NoCollectionsPlaceholder from './NoCollectionsPlaceholder';
import PriceMovement from './PriceMovement';

const COLLECTION_LIMIT = 4;

const FavoritedCollections = () => {
  const { data, loading, error, refetch } = useGetFavoritedCollectionsQuery();

  useEffect(() => {
    // Refetch on page reload to keep data consistent
    refetch();
  }, []);

  if (error) return <ErrorMessage error={error} />;
  if (loading || !data) return <Loading />;

  const { getFavoritedCollections } = data;

  if (getFavoritedCollections.length === 0)
    return (
      <div className="mt-8">
        <NoCollectionsPlaceholder />
      </div>
    );

  return (
    <>
      <div className="mt-8 flex space-x-6">
        {getFavoritedCollections.slice(0, COLLECTION_LIMIT).map((collection) => (
          <Link
            to={`/collection/${collection.collectionSlug}`}
            className="flex-col w-[180px] truncate"
            key={collection.address}>
            <img src={collection.image || ''} alt={collection.name} className="aspect-square rounded-[14px] mb-4" />
            <span className="text-2xl font-medium truncate">{collection.name}</span>
            <div className="mt-3 font-medium flex justify-between mb-0.5">
              <span className="truncate">
                {collection.pastFloorPriceArray[collection.pastFloorPriceArray.length - 1]} ETH
              </span>
              <PriceMovement pastPriceArray={collection.pastFloorPriceArray} />
            </div>
            <span className="text-dark-40">Floor</span>
          </Link>
        ))}
        {getFavoritedCollections.length <= COLLECTION_LIMIT ? (
          <NoCollectionsPlaceholder />
        ) : (
          <Link to="/favorites" className="flex flex-col justify-center items-center rounded-[14px] flex-1 bg-dark-90">
            <div className="rounded-full bg-primary text-white font-medium mb-4 h-12 w-12 flex items-center justify-center">
              +{getFavoritedCollections.length - COLLECTION_LIMIT}
            </div>
            <span className="text-white text-center">Click here to see more</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default FavoritedCollections;
