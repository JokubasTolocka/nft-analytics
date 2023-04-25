import Button from '../../../components/Button';
import { useMarkCollectionAsFavoriteMutation } from '../../../graphql/generated/hooks';
import { ReactComponent as Star } from '../../../assets/icons/Star.svg';
import { ReactComponent as Verify } from '../../../assets/icons/Verify.svg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/Auth/useAuth';

interface CollectionAddressProps {
  collectionAddress: string;
  // eslint-disable-next-line no-unused-vars
  handleRefresh: (newFavoriteState: boolean) => void;
}

const FavoriteButton = ({ collectionAddress, handleRefresh }: CollectionAddressProps) => {
  const { collectionSlug } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const { myUser } = useAuth();
  const [markCollectionAsFavorite, { loading }] = useMarkCollectionAsFavoriteMutation({
    onCompleted: ({ markCollectionAsFavorite }) => {
      setIsFavorite(markCollectionAsFavorite);
      handleRefresh(markCollectionAsFavorite);
    }
  });

  useEffect(() => {
    const hasCollectionFavorited = myUser?.favoritedCollections.findIndex((address) => collectionAddress === address);

    setIsFavorite(hasCollectionFavorited === -1 ? false : true);
  }, []);

  const onFavorite = () =>
    markCollectionAsFavorite({
      variables: {
        markCollectionAsFavoriteData: { address: collectionAddress, collectionSlug: collectionSlug || '' }
      }
    });

  return (
    <Button
      variant={isFavorite ? 'defaultFull' : 'default'}
      className="mb-4"
      onClick={onFavorite}
      isActionLoading={loading}>
      {isFavorite ? (
        <>
          <Verify /> <span>Favorited</span>
        </>
      ) : (
        <>
          <Star /> <span>Favorite</span>
        </>
      )}
    </Button>
  );
};

export default FavoriteButton;
