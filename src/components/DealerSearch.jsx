import { useState } from 'react';
import styles from './DealerSearch.module.css';

const ZIP_PATTERN = /^\d{5}$/;

/** Google Maps search URL for dealers of a brand (or any brand) near a ZIP code. */
function dealerSearchUrl(brand, zip) {
  const query = `${brand ? `${brand} ` : ''}motorcycle dealer near ${zip}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function DealerSearch({ brands }) {
  const [brand, setBrand] = useState('');
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedZip = zip.trim();
    if (!ZIP_PATTERN.test(trimmedZip)) {
      setError('Enter a 5-digit ZIP code.');
      return;
    }
    setError('');
    window.open(dealerSearchUrl(brand, trimmedZip), '_blank', 'noopener');
  }

  return (
    <div className={styles.panel}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>Find a dealer near you</h2>
        <p className={styles.lead}>
          Pick a brand and enter your ZIP code to see nearby dealers on Google
          Maps.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="dealer-brand">Brand</label>
          <select
            id="dealer-brand"
            className={styles.select}
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          >
            <option value="">Any brand</option>
            {brands.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="dealer-zip">ZIP code</label>
          <div className={styles.inputWrap}>
            <svg
              className={styles.inputIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <input
              id="dealer-zip"
              className={styles.input}
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder="e.g. 90210"
              value={zip}
              onChange={(event) => setZip(event.target.value)}
              aria-invalid={error ? true : undefined}
              aria-describedby="dealer-zip-error"
            />
          </div>
        </div>

        <button type="submit" className={styles.button}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle
              cx="11"
              cy="11"
              r="7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M16.5 16.5 21 21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          Search dealers
        </button>

        <p id="dealer-zip-error" className={styles.error} aria-live="polite">
          {error}
        </p>
      </form>

      <p className={styles.note}>Results open in a new tab.</p>
    </div>
  );
}
