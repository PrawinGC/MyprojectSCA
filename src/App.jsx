import { Routes, Route, Outlet } from 'react-router-dom';
import AuthForm from './pages/AuthForm';
import ClubsAndEvents from './pages/ClubsandEvents';
import Navbar from './components/NavBar';
import ClubPage from './pages/ClubPage';
import EventPage from './pages/EventPage';
import UserProfile from './pages/UserProfile'; // ✅ Make sure this matches the export

const Layout = () => (
  <>
    <Navbar />
    <main className="pt-4">
      <Outlet />
    </main>
  </>
);


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ClubsAndEvents />} />
        <Route path="/clubs" element={<ClubPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/club/:clubId" element={<ClubPage />} />
        <Route path="/event/:eventId" element={<EventPage />} />
      </Route>
      <Route path="/login" element={<AuthForm />} />
    </Routes>
  );
}

export default App;
