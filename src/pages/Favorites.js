import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Favorites.module.css";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);
  const navigate = useNavigate();

  function goToAllMeetupsHandler() {
    navigate("/");
  }

  let content;
  if (favoritesContext.totalFavorites === 0) {
    content = (
      <section className={classes.actions}>
        <h3>You don't have any favorite Meetups yet. Start adding some!</h3>
        <button onClick={goToAllMeetupsHandler}>Go to All Meetups</button>
      </section>
    );
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite Meetups</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
