import { ReactComponent as ArrowDifference } from '../../../assets/icons/ArrowDifference.svg';
import cx from 'classnames';

interface PriceMovementProps {
  pastPriceArray: number[];
}

const PriceMovement = ({ pastPriceArray }: PriceMovementProps) => {
  const getPriceMovement = () => {
    if (pastPriceArray.length === 1) return 0;

    const latestPrice = pastPriceArray[pastPriceArray.length - 1];
    const oldestPrice = pastPriceArray[0];

    const difference = ((latestPrice - oldestPrice) / oldestPrice) * 100;

    return Math.round(difference * 100) / 100;
  };

  const getIcon = (difference: number) => {
    if (difference < 0) {
      return <ArrowDifference className="rotate-90 text-alert-100 h-6 w-6" />;
    } else if (difference === 0) {
      return null;
    } else return <ArrowDifference className="text-success-100 h-6 w-6" />;
  };

  const getClass = (difference: number) => {
    if (difference < 0) {
      return 'text-alert-100';
    } else if (difference === 0) {
      return 'text-dark-40';
    } else return 'text-success-100';
  };

  const priceMovement = getPriceMovement();

  return (
    <div className={cx('flex space-x-1 text-base', getClass(priceMovement))}>
      {getIcon(priceMovement)}
      <span>{Math.abs(priceMovement)}%</span>
    </div>
  );
};

export default PriceMovement;
