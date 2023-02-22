import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="h-20 flex items-center mx-16">
      <Link to="/" className="border border-dark-40 px-4 py-1.5 rounded-full w-min">
        <span className="text-white text-xl">Trade</span>
      </Link>
    </div>
  );
};

export default NavBar;
