import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import cx from 'classnames';
import { useGetFavoritedCollectionsQuery } from '../../../graphql/generated/hooks';
import CollectionRow from './CollectionRow';
import { useEffect } from 'react';

const FavoritesPage = () => {
  const { data, loading, error, refetch } = useGetFavoritedCollectionsQuery();

  useEffect(() => {
    // Refetch on page reload to keep data consistent
    refetch();
  }, []);

  if (error) return <ErrorMessage error={error} />;
  if (loading || !data) return <Loading />;

  const { getFavoritedCollections } = data;

  if (getFavoritedCollections.length === 0) return null;

  const headerClass = 'text-left text-dark-40 font-normal';

  return (
    <div className="p-12 w-full flex flex-col overflow-y-scroll">
      <span className="text-[32px] font-medium">Favorites</span>
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
          {getFavoritedCollections.map((collection, index) => (
            <CollectionRow collection={collection} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoritesPage;
