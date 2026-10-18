import { useEffect, useRef, useState, type MouseEvent } from "react";
import { artists, sections } from "../data/artists";

type HeaderProps = {
  artistId: string;
  view: "artist" | "sources";
  onSelect: (artistId: string) => void;
  onShowSources: () => void;
};

function scrollTarget(id: string) {
  if (id === "biography") return document.getElementById("biography");
  return document.getElementById(`${id}-heading`) ?? document.getElementById(id);
}

function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const target = scrollTarget(id);
  if (!target) return null;
  const headerHeight =
    Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
    ) || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return target;
}

export function Header({ artistId, view, onSelect, onShowSources }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const applyHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`,
      );
    };

    applyHeight();
    const observer = new ResizeObserver(applyHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const marker = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      return headerHeight + 24;
    };

    const update = () => {
      let current: string = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= marker()) current = section.id;
      }
      setActiveSection((previous) => (previous === current ? previous : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [artistId]);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!sections.some((section) => section.id === id)) return;
    requestAnimationFrame(() => scrollToSection(id, "auto"));
  }, [artistId]);

  function jump(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = scrollToSection(id, reduceMotion ? "auto" : "smooth");
    history.pushState(null, "", `#${id}`);
    setActiveSection(id);
    target?.focus({ preventScroll: true });
  }

  return (
    <header className="site-header" ref={headerRef}>
      <a className="skip" href={view === "sources" ? "#works-cited-heading" : "#biography"}>
        {view === "sources" ? "Skip to works cited" : "Skip to biography"}
      </a>
      <div className="header-inner">
        <div className="header-top">
          <a
            className="brand"
            href="#biography"
            onClick={(event) => {
              if (view === "sources") {
                event.preventDefault();
                onSelect(artistId);
                return;
              }
              jump(event, "biography");
            }}
          >
            <span className="brand-mark">Renaissance Artists</span>
            <span className="brand-sub">Educational archive</span>
          </a>
          <div className="header-controls">
            <div className="artist-tabs" role="tablist" aria-label="Artists">
              {artists.map((artist) => {
                const selected = view === "artist" && artist.id === artistId;
                return (
                  <button
                    key={artist.id}
                    type="button"
                    role="tab"
                    id={`tab-${artist.id}`}
                    aria-selected={selected}
                    aria-controls="artist-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => onSelect(artist.id)}
                  >
                    {artist.selectorLabel}
                    {artist.placeholder ? <span className="badge">Placeholder</span> : null}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              className="sources-link"
              aria-current={view === "sources" ? "page" : undefined}
              onClick={onShowSources}
            >
              Works Cited
            </button>
          </div>
        </div>
        {view === "artist" ? (
          <nav className="section-nav" aria-label="On this page">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? "true" : undefined}
                onClick={(event) => jump(event, section.id)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
