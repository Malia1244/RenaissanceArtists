import { useEffect, useState } from "react";
import { artists } from "./data/artists";
import { ArtistPage } from "./components/ArtistPage";
import { Header } from "./components/Header";
import { WorksCited } from "./components/WorksCited";

export default function App() {
  const [artistId, setArtistId] = useState(artists[0].id);
  const [view, setView] = useState<"artist" | "sources">("artist");
  const artist = artists.find((entry) => entry.id === artistId) ?? artists[0];

  useEffect(() => {
    document.title =
      view === "sources"
        ? "Works Cited · Renaissance Artists"
        : `${artist.selectorLabel} · Renaissance Artists`;
  }, [artist.selectorLabel, view]);

  function selectArtist(nextId: string) {
    setArtistId(nextId);
    setView("artist");
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.getElementById("artist-name")?.focus({ preventScroll: true });
    });
  }

  function showSources() {
    setView("sources");
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.getElementById("works-cited-heading")?.focus({ preventScroll: true });
    });
  }

  return (
    <div className="site-shell">
      <Header
        artistId={artist.id}
        view={view}
        onSelect={selectArtist}
        onShowSources={showSources}
      />
      <main key={view === "sources" ? "sources" : artist.id}>
        {view === "sources" ? <WorksCited /> : <ArtistPage artist={artist} />}
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-brand">Renaissance Artists</p>
        </div>
      </footer>
    </div>
  );
}
