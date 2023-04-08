import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar/Sidebar';
import { useAuth } from './contexts/Auth/useAuth';
import Collection from './pages/authenticated/Collection/Collection';
import Home from './pages/authenticated/Home/Home';
import ProfilePage from './pages/authenticated/Profile/ProfilePage';
import SearchPage from './pages/authenticated/SearchPage/SearchPage';
import AddEmailPage from './pages/unauthenticated/AddEmailPage/AddEmailPage';
import Login from './pages/unauthenticated/Login/Login';

const App = () => {
  const { myUser } = useAuth();
  const location = useLocation();

  if (!myUser) return <Login />;
  if (location.pathname === '/verify') return <AddEmailPage />;

  return (
    <div className="bg-dark-100 h-screen w-full flex flex-col text-white">
      <NavBar />
      <div className="flex border-t border-dark-40 h-full overflow-y-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collection/:collectionSlug" element={<Collection />} />
          <Route path="search/:searchSlug" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
