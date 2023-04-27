import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import cx from 'classnames';
import CollectionRow from './CollectionRow';
import { useEffect } from 'react';
import NoCollectionsPlaceholder from '../Home/NoCollectionsPlaceholder';
import { useGetFavouritedCollectionsQuery } from '../../../graphql/generated/hooks';

const FavouritesPage = () => {
  const { data, loading, error, refetch } = useGetFavouritedCollectionsQuery();

  useEffect(() => {
    // Refetch on page reload to keep data consistent
    refetch();
  }, []);

  if (error) return <ErrorMessage error={error} />;
  if (loading || !data) return <Loading />;

  const { getFavouritedCollections } = data;

  if (getFavouritedCollections.length === 0)
    return (
      <div className="p-12 w-full flex flex-col">
        <span className="text-[32px] font-medium">Favourites</span>
        <div className="mt-8">
          <NoCollectionsPlaceholder />
        </div>
      </div>
    );

  const headerClass = 'text-left text-dark-40 font-normal';

  return (
    <div className="p-12 w-full flex flex-col overflow-y-scroll">
      <span className="text-[32px] font-medium">Favourites</span>
      <table className="mt-8">
        <thead>
          <tr className="mb-2">
            <th className={cx('opacity-0 cursor-default', headerClass)}>Image</th>
            <th className={headerClass}>Name</th>
            <th className={headerClass}>Floor Price</th>
            <th className={headerClass}>24h Chart</th>
            <th className={headerClass}>24h Change</th>
            <th className={headerClass}>Last Hour Volume</th>
            <th className={headerClass}>24h Chart</th>
          </tr>
        </thead>
        <tbody>
          {getFavouritedCollections.map((collection, index) => (
            <CollectionRow collection={collection} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavouritesPage;
