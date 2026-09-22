const FAVORITES_KEY = 'favoriteBikes';

/** Stable id used to store a bike in the favorites list, e.g. "Honda CRF110F". */
export function bikeId(bike) {
  return `${bike.brand} ${bike.model}`;
}

// localStorage can be unavailable (private windows, blocked storage), so
// reads and writes fail quietly instead of breaking the page.
export function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function writeFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch {
    // Favorite still toggles for this visit, it just won't be remembered.
  }
}
