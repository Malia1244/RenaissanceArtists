const frame = [
  { src: "lilies.png", place: "tl" },
  { src: "roses.png", place: "tr" },
  { src: "blossoms.png", place: "bl" },
  { src: "cream-blossoms.png", place: "br" },
] as const;

function flowerSrc(file: string) {
  return `${import.meta.env.BASE_URL}${file}`;
}

export function SiteFlowers() {
  return (
    <div className="site-flowers" aria-hidden="true">
      {frame.map((flower) => (
        <img
          key={flower.place}
          className={`flower place-${flower.place}`}
          src={flowerSrc(flower.src)}
          alt=""
        />
      ))}
    </div>
  );
}
