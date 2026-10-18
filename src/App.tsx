import { useEffect, useState } from "react";
import { artists } from "./data/artists";
import { ArtistPage } from "./components/ArtistPage";
import { Header } from "./components/Header";

export default function App() {
  const [artistId, setArtistId] = useState(artists[0].id);
  const artist = artists.find((entry) => entry.id === artistId) ?? artists[0];

  useEffect(() => {
    document.title = `${artist.selectorLabel} · Renaissance Masters`;
  }, [artist.selectorLabel]);

  function selectArtist(nextId: string) {
    setArtistId(nextId);
    requestAnimationFrame(() => {
      document.getElementById("artist-name")?.focus({ preventScroll: true });
    });
  }

  return (
    <>
      <Header artistId={artist.id} onSelect={selectArtist} />
      <main key={artist.id}>
        <ArtistPage artist={artist} />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-brand">Renaissance Masters</p>
          <p>Entries include only the research supplied for each artist.</p>
        </div>
      </footer>
    </>
  );
}
