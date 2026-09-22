import { brandInitials, brandHue } from '../utils/brand.js';
import styles from './BikeCard.module.css';

export default function BikeCard({ bike }) {
  const hue = brandHue(bike.brand);
  const initials = brandInitials(bike.brand);

  return (
    <article className={styles.card}>
      <div className={styles.cardMedia} style={{ '--hue': hue }}>
        <span className={styles.brandBadge} title={`${bike.brand} logo`}>
          {initials}
        </span>
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
