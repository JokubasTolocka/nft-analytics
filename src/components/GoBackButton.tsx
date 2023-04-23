import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/icons/ArrowLeft.svg';

const GoBackButton = () => {
  const navigate = useNavigate();

  const onClick = () => navigate(-1);

  return (
    <div onClick={onClick} className="border border-dark-40 rounded-2xl p-3 cursor-pointer hover:bg-dark-90">
      <ArrowLeft />
    </div>
  );
};

export default GoBackButton;
