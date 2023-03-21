import { Asset } from '../graphql/generated/types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

interface AssetGridProps {
  assets: Asset[];
  className?: string;
}

const AssetGrid = ({ assets, className }: AssetGridProps) => (
  <div className={cx('grid xl:grid-cols-5 grid-cols-3 mt-6 gap-x-6 gap-y-12 mb-16', className)}>
    {assets.map((asset: Asset) => (
      <div key={asset.name} className="flex flex-col">
        <img src={asset.image} alt={asset.name} className="rounded-2xl aspect-square object-cover" />
        <span className="ml-3 !mt-4 font-medium text-lg truncate">{asset.name}</span>
        <Link to={`/collection/${asset.collectionSlug}`} className="ml-3 !mt-1 hover:underline truncate cursor-pointer">
          {asset.collectionName}
        </Link>
      </div>
    ))}
  </div>
);

export default AssetGrid;
