import { artists, citationsFor } from "../data/artists";

export function WorksCited() {
  return (
    <div className="artist-page">
      <section className="section hero-section" aria-labelledby="works-cited-heading">
        <div className="section-head">
          <p className="kicker">Sources</p>
          <h1 id="works-cited-heading" tabIndex={-1}>
            Works Cited
          </h1>
        </div>
        <div className="citation-groups">
          {artists.map((artist) => (
            <section key={artist.id} className="citation-group" aria-labelledby={`cite-${artist.id}`}>
              <h2 id={`cite-${artist.id}`}>{artist.selectorLabel}</h2>
              <ol>
                {citationsFor(artist).map((citation) => (
                  <li key={citation.url}>
                    <span className="citation-label">{citation.label}</span>
                    <a href={citation.url} target="_blank" rel="noreferrer">
                      {citation.url.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
