import { useEffect, useState } from 'react';
import BikeCard from './BikeCard.jsx';
import { bikeId, readFavorites } from '../utils/favorites.js';
import styles from './FavoritesList.module.css';

export default function FavoritesList({ bikes }) {
  // null until the saved favorites have been read in the browser, so the page
  // doesn't flash "no favorites" before they load.
  const [favoriteIds, setFavoriteIds] = useState(null);

  useEffect(() => {
    setFavoriteIds(readFavorites());
  }, []);

  function handleFavoriteChange(id, isFavorite) {
    if (!isFavorite) {
      setFavoriteIds((ids) => ids.filter((favId) => favId !== id));
    }
  }

  if (favoriteIds === null) {
    return null;
  }

  const favoriteBikes = bikes.filter((bike) =>
    favoriteIds.includes(bikeId(bike)),
  );

  if (favoriteBikes.length === 0) {
    return (
      <p className={styles.empty}>
        You haven&rsquo;t favorited any bikes yet. Tap the heart on a bike in
        the <a href="/motorcycles">motorcycle list</a> to save it here.
      </p>
    );
  }

  return (
    <div className={styles.cardRow}>
      {favoriteBikes.map((bike) => (
        <BikeCard
          key={bikeId(bike)}
          bike={bike}
          onFavoriteChange={handleFavoriteChange}
        />
      ))}
    </div>
  );
}
