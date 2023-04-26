import FavoritedCollections from './FavoritedCollections';

const Home = () => {
  return (
    <div className="p-12 w-full flex flex-col overflow-y-scroll">
      <span className="text-[32px] font-medium">Favorites</span>
      <FavoritedCollections />
    </div>
  );
};

export default Home;
