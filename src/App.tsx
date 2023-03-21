import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar/Sidebar';
import { useAuth } from './contexts/Auth/useAuth';
import Collection from './pages/authenticated/Collection/Collection';
import Home from './pages/authenticated/Home';
import SearchPage from './pages/authenticated/SearchPage/SearchPage';
import Login from './pages/Login/Login';

const App = () => {
  const { myUser } = useAuth();

  if (!myUser) return <Login />;

  return (
    <div className="bg-dark-100 h-screen w-full flex flex-col">
      <NavBar />
      <div className="flex border-t border-dark-40 h-full overflow-y-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collection/:collectionSlug" element={<Collection />} />
          <Route path="search/:searchSlug" element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
