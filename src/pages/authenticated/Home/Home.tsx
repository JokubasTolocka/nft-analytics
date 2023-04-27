import FavouritedCollections from './FavouritedCollections';

const Home = () => {
  return (
    <div className="p-12 w-full flex flex-col overflow-y-scroll">
      <span className="text-[32px] font-medium">Favourites</span>
      <FavouritedCollections />
    </div>
  );
};

export default Home;
