import type { Artist } from "../data/artists";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { SourceNote } from "./SourceNote";

type ArtistPageProps = {
  artist: Artist;
};

function splitName(fullName: string) {
  const parenthetical = fullName.match(/^(.*?)\s*(\(.*\))\s*$/);
  if (parenthetical) {
    return { primary: parenthetical[1].trim(), note: parenthetical[2].trim() };
  }

  const knownAs = fullName.match(/^(.*?),\s*(commonly known as .*)$/i);
  if (knownAs) {
    return { primary: knownAs[1].trim(), note: knownAs[2].trim() };
  }

  return { primary: fullName, note: "" };
}

function NameTitle({ artist }: { artist: Artist }) {
  const { primary, note } = splitName(artist.fullName);
  const words = primary.split(" ");
  if (artist.placeholder || words.length < 2) {
    return (
      <>
        <h1 id="artist-name" tabIndex={-1}>
          {primary}
        </h1>
        {note ? <p className="name-note">{note}</p> : null}
      </>
    );
  }

  const accent = words.length === 2 ? words[1] : words.slice(-2).join(" ");
  const rest = words.length === 2 ? [words[0]] : words.slice(0, -2);
  const first = rest[0] ?? primary;
  const middle = rest.slice(1).join(" ");

  return (
    <>
      <h1 id="artist-name" tabIndex={-1}>
        <span className="name-lead">{first}</span>
        {middle ? <span className="name-lead">{middle}</span> : null}
        <span className="name-accent">{accent}</span>
      </h1>
      {note ? <p className="name-note">{note}</p> : null}
    </>
  );
}

export function ArtistPage({ artist }: ArtistPageProps) {
  return (
    <div
      id="artist-panel"
      role="tabpanel"
      aria-labelledby={`tab-${artist.id}`}
      className="artist-page"
    >
      <section id="biography" className="section hero-section" aria-labelledby="artist-name" tabIndex={-1}>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">Biography & Overview</p>
            {artist.placeholder ? (
              <p className="template-note">Template ready for data insertion</p>
            ) : null}
            <NameTitle artist={artist} />
            <ul className="meta">
              <li>
                <span className="glyph" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="5" width="16" height="15" rx="1.5" />
                    <path d="M8 3.5v3M16 3.5v3M4 9.5h16" />
                  </svg>
                </span>
                <span>
                  <span className="meta-label">Lifespan</span>
                  <span className="meta-value">{artist.lifespan}</span>
                </span>
              </li>
              <li>
                <span className="glyph" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
                    <circle cx="12" cy="11" r="1.6" />
                  </svg>
                </span>
                <span>
                  <span className="meta-label">Place of Birth</span>
                  <span className="meta-value">{artist.birthplace}</span>
                </span>
              </li>
              <li>
                <span className="glyph" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 16.5 14.5 6a2.1 2.1 0 0 1 3 3L7 19.5 4 20z" />
                  </svg>
                </span>
                <span>
                  <span className="meta-label">Art Style</span>
                  <span className="meta-value">{artist.artStyle}</span>
                </span>
              </li>
            </ul>
            {artist.biographySource ? <SourceNote source={artist.biographySource} /> : null}
          </div>
          <div className={artist.portraitSrc ? "portrait-frame" : "medallion"}>
            {artist.portraitSrc ? (
              <img src={artist.portraitSrc} alt={artist.portraitCaption} />
            ) : (
              <ImagePlaceholder caption={artist.portraitCaption} ratio="4-3" />
            )}
          </div>
        </div>
      </section>

      <section id="timeline" className="section" aria-labelledby="timeline-heading">
        <div className="section-head">
          <p className="section-kicker">02</p>
          <h2 id="timeline-heading" tabIndex={-1}>Timeline</h2>
        </div>
        <ol className="timeline">
          {artist.timeline.map((item) => (
            <li key={`${item.year}-${item.event}`}>
              <p className="year">{item.year}</p>
              <p>{item.event}</p>
            </li>
          ))}
        </ol>
        <SourceNote source={artist.timelineSource} />
      </section>

      <section id="patrons" className="section" aria-labelledby="patrons-heading">
        <div className="section-head">
          <p className="section-kicker">03</p>
          <h2 id="patrons-heading" tabIndex={-1}>Major Patrons</h2>
        </div>
        <ul className="patron-grid">
          {artist.patrons.map((patron) => (
            <li key={`${patron.name}-${patron.detail}`}>
              <h3>{patron.name}</h3>
              <p>{patron.detail}</p>
            </li>
          ))}
        </ul>
        {artist.patronsSource ? <SourceNote source={artist.patronsSource} /> : null}
      </section>

      <section id="artworks" className="section" aria-labelledby="artworks-heading">
        <div className="section-head">
          <p className="section-kicker">04</p>
          <h2 id="artworks-heading" tabIndex={-1}>Featured Artworks</h2>
        </div>
        <div className="artwork-grid">
          {artist.artworks.map((artwork) => (
            <article key={artwork.title} className="artwork-card">
              <div className="gold-frame">
                {artwork.imageSrc ? (
                  <img src={artwork.imageSrc} alt={artwork.caption} />
                ) : (
                  <ImagePlaceholder caption={artwork.caption} ratio="16-9" />
                )}
              </div>
              <h3>{artwork.title}</h3>
              <dl>
                <div>
                  <dt>Period & commission</dt>
                  <dd>{artwork.period}</dd>
                </div>
                <div>
                  <dt>Description & context</dt>
                  <dd>{artwork.details}</dd>
                </div>
                <div>
                  <dt>Why it is art</dt>
                  <dd>{artwork.whyArt}</dd>
                </div>
                {artwork.selectionReason ? (
                  <div>
                    <dt>Personal selection</dt>
                    <dd>{artwork.selectionReason}</dd>
                  </div>
                ) : null}
              </dl>
              <SourceNote source={artwork.source} />
            </article>
          ))}
        </div>
      </section>

      <section id="facts" className="section" aria-labelledby="facts-heading">
        <div className="section-head">
          <p className="section-kicker">05</p>
          <h2 id="facts-heading" tabIndex={-1}>Surprising Facts</h2>
        </div>
        <blockquote className="fact-card">
          <p>{artist.funFact.fact}</p>
          {artist.funFact.source ? <SourceNote source={artist.funFact.source} /> : null}
        </blockquote>
      </section>
    </div>
  );
}
