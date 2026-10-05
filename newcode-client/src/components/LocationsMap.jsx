import React from 'react';
import './LocationsMap.css';

function Pin({ loc, active, onEnter, onLeave }) {
  return (
    <button
      type="button"
      className={`locmap__pin ${active ? 'is-active' : ''}`}
      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onMouseLeave={onLeave}
      onBlur={onLeave}
      aria-label={loc.city}
    >
      <span className="locmap__pulse" aria-hidden="true" />
      <span className="locmap__arrow" aria-hidden="true">
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <path
            d="M9 21s7-7.2 7-12.2A7 7 0 1 0 2 8.8C2 13.8 9 21 9 21Z"
            fill={`url(#pin-${loc.city.replace(/\s+/g, '')})`}
          />
          <circle cx="9" cy="8.5" r="2.4" fill="#fff" />
          <defs>
            <linearGradient id={`pin-${loc.city.replace(/\s+/g, '')}`} x1="2" y1="2" x2="16" y2="20">
              <stop stopColor="rgb(84, 45, 169)" />
              <stop offset="1" stopColor="rgb(0, 134, 158)" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="locmap__label">{loc.city}</span>
    </button>
  );
}

function HoverCard({ loc }) {
  return (
    <article
      className={`locmap__card ${loc.x > 72 ? 'is-left' : ''}`}
      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
    >
      <div className="locmap__card-head">
        <img src={loc.image} alt="" />
        <div>
          <p className="locmap__card-city">
            <span aria-hidden="true">{loc.flag}</span> {loc.city}
          </p>
          <p className="locmap__card-co">{loc.company}</p>
        </div>
      </div>
      <p className="locmap__card-addr">{loc.address}</p>
      <dl>
        {loc.uen ? (
          <>
            <dt>UEN</dt>
            <dd>{loc.uen}</dd>
          </>
        ) : null}
        {loc.phone ? (
          <>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}>{loc.phone}</a>
            </dd>
          </>
        ) : null}
        {loc.email ? (
          <>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${loc.email}`}>{loc.email}</a>
            </dd>
          </>
        ) : null}
        {loc.manager ? (
          <>
            <dt>Manager</dt>
            <dd>{loc.manager}</dd>
          </>
        ) : null}
      </dl>
    </article>
  );
}

export default function LocationsMap({ locations, active, setActive }) {
  const loc = locations.items[active];

  return (
    <div className="locmap">
      <div
        className="locmap__stage"
        onMouseLeave={() => setActive(null)}
      >
        <img src={locations.map} alt={locations.mapAlt} />
        {locations.items.map((item, i) => (
          <Pin
            key={item.city}
            loc={item}
            active={active === i}
            onEnter={() => setActive(i)}
            onLeave={() => {}}
          />
        ))}
        {loc ? <HoverCard loc={loc} /> : null}
      </div>

      <ul className="locmap__list">
        {locations.items.map((item, i) => (
          <li key={item.city}>
            <button
              type="button"
              className={`locmap__list-item ${active === i ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="locmap__list-flag" aria-hidden="true">
                {item.flag}
              </span>
              <span>
                <strong>{item.city}</strong>
                <em>{item.company}</em>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
