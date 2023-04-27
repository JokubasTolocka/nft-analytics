import Button from '../../../components/Button';
import { ReactComponent as Star } from '../../../assets/icons/Star.svg';
import { ReactComponent as Verify } from '../../../assets/icons/Verify.svg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/Auth/useAuth';
import { useMarkCollectionAsFavouriteMutation } from '../../../graphql/generated/hooks';

interface CollectionAddressProps {
  collectionAddress: string;
  // eslint-disable-next-line no-unused-vars
  handleRefresh: (newFavouriteState: boolean) => void;
}

const FavouriteButton = ({ collectionAddress, handleRefresh }: CollectionAddressProps) => {
  const { collectionSlug } = useParams();
  const [isFavourite, setIsFavourite] = useState(false);
  const { myUser } = useAuth();
  const [markCollectionAsFavourite, { loading }] = useMarkCollectionAsFavouriteMutation({
    onCompleted: ({ markCollectionAsFavourite }) => {
      setIsFavourite(markCollectionAsFavourite);
      handleRefresh(markCollectionAsFavourite);
    }
  });

  useEffect(() => {
    const hasCollectionFavourited = myUser?.favouritedCollections.findIndex((address) => collectionAddress === address);

    setIsFavourite(hasCollectionFavourited === -1 ? false : true);
  }, []);

  const onFavourite = () =>
    markCollectionAsFavourite({
      variables: {
        markCollectionAsFavouriteData: { address: collectionAddress, collectionSlug: collectionSlug || '' }
      }
    });

  return (
    <Button
      variant={isFavourite ? 'defaultFull' : 'default'}
      className="mb-4"
      onClick={onFavourite}
      isActionLoading={loading}>
      {isFavourite ? (
        <>
          <Verify /> <span>Favourited</span>
        </>
      ) : (
        <>
          <Star /> <span>Favourite</span>
        </>
      )}
    </Button>
  );
};

export default FavouriteButton;
