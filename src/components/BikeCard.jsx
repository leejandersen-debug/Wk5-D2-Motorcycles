import { useEffect, useState } from 'react';
import { brandInitials, brandHue } from '../utils/brand.js';
import styles from './BikeCard.module.css';

const FAVORITES_KEY = 'favoriteBikes';

// localStorage can be unavailable (private windows, blocked storage), so
// reads and writes fail quietly instead of breaking the card.
function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) ?? [];
  } catch {
    return [];
  }
}

function writeFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch {
    // Favorite still toggles for this visit, it just won't be remembered.
  }
}

export default function BikeCard({ bike }) {
  const hue = brandHue(bike.brand);
  const initials = brandInitials(bike.brand);
  const bikeId = `${bike.brand} ${bike.model}`;
  const [isFavorite, setIsFavorite] = useState(false);

  // Load the saved state after the page loads, so the server-rendered HTML
  // and the first browser render match.
  useEffect(() => {
    setIsFavorite(readFavorites().includes(bikeId));
  }, [bikeId]);

  function toggleFavorite() {
    const others = readFavorites().filter((id) => id !== bikeId);
    writeFavorites(isFavorite ? others : [...others, bikeId]);
    setIsFavorite(!isFavorite);
  }

  return (
    <article className={styles.card}>
      <div className={styles.cardMedia} style={{ '--hue': hue }}>
        <span className={styles.brandBadge} title={`${bike.brand} logo`}>
          {initials}
        </span>
        <button
          type="button"
          className={styles.favoriteButton}
          onClick={toggleFavorite}
          aria-pressed={isFavorite}
          aria-label={`Favorite ${bikeId}`}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 21s-7.5-4.6-9.6-9.3C1 8.4 3 4.5 6.9 4.5c2.1 0 3.6 1.1 5.1 3 1.5-1.9 3-3 5.1-3 3.9 0 5.9 3.9 4.5 7.2C19.5 16.4 12 21 12 21z"
              fill={isFavorite ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <svg
          className={styles.bikeIcon}
          viewBox="0 0 120 60"
          role="img"
          aria-label={`${bike.brand} ${bike.model}`}
        >
          <circle
            cx="24"
            cy="46"
            r="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <circle
            cx="96"
            cy="46"
            r="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="M24 46 L46 24 L70 24 L96 46 M46 24 L40 12 L54 12 M70 24 L64 40 L24 46 M70 24 L82 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="64" cy="40" r="3" fill="currentColor" />
        </svg>
      </div>
      <h3>{bike.brand}</h3>
      <p className={styles.model}>{bike.model}</p>
      <dl>
        <dt>Age group</dt>
        <dd>{bike.ageGroup}</dd>
        <dt>Size</dt>
        <dd>{bike.size}</dd>
        <dt>Engine</dt>
        <dd>{bike.stroke}</dd>
        <dt>Options</dt>
        <dd>{bike.options}</dd>
      </dl>
    </article>
  );
}
