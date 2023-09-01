import { BrowserRouter, Route, Routes } from "react-router-dom";

import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import AllMeetupsPage from "./pages/AllMeetups";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
