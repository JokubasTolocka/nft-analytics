import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import { useSearchCollectionsQuery } from '../../../graphql/generated/hooks';

const SearchPage = () => {
  const { searchSlug } = useParams();

  const { data, loading, error } = useSearchCollectionsQuery({ variables: { searchSlug: searchSlug || '' } });

  if (error) return <ErrorMessage error={error} />;
  if (loading || !data) return <Loading />;

  if (!data.searchCollections.length)
    return <div className="text-white text-lg w-full h-full flex justify-center items-center">No results</div>;

  return (
    <div className="m-8 grid grid-cols-2 gap-4 w-full content-start">
      {data.searchCollections.map((collection) => (
        <Link
          to={`/collection/${collection.slug}`}
          key={collection.name}
          className="p-3 flex space-x-4 text-white bg-dark-90 rounded-2xl w-full h-fit">
          <img src={collection.image} alt={collection.name} className="rounded-lg h-16 w-16" />
          <span className="text-lg font-medium h-fit">{collection.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
