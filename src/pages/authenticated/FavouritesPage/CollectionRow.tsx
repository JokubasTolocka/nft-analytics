import { useNavigate } from 'react-router-dom';
import { FavouriteCollectionFragment } from '../../../graphql/generated/operationsTypes';
import PriceMovement from '../Home/PriceMovement';
import SimpleLineGraph from './SimpleLineGraph';

interface CollectionRowProps {
  collection: FavouriteCollectionFragment;
}

const CollectionRow = ({ collection }: CollectionRowProps) => {
  const navigate = useNavigate();

  const onClick = () => navigate(`/collection/${collection.collectionSlug}`);

  return (
    <tr className="mb-2 hover:bg-dark-90 !rounded-[14px] cursor-pointer" onClick={onClick}>
      <td>
        <img src={collection.image || ''} alt={collection.name} className="w-16 h-16 rounded-[14px] mr-4 ml-2" />
      </td>
      <td className="text-xl font-medium truncate">{collection.name}</td>
      <td className="text-xl font-medium">
        {collection.pastFloorPriceArray[collection.pastFloorPriceArray.length - 1].toFixed(2)} ETH
      </td>
      <td>
        <SimpleLineGraph data={collection.pastFloorPriceArray} title="Floor price" />
      </td>
      <td>
        <PriceMovement pastPriceArray={collection.pastFloorPriceArray} />
      </td>
      <td className="text-xl font-medium">
        {collection.pastVolumeArray[collection.pastVolumeArray.length - 1].toFixed(2)} ETH
      </td>
      <td>
        <SimpleLineGraph data={collection.pastVolumeArray} title="Volume" />
      </td>
    </tr>
  );
};

export default CollectionRow;
