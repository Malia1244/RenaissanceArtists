const frame = [
  { src: "white-lilies.png", place: "tl" },
  { src: "magnolia.png", place: "tr" },
  { src: "jasmine.png", place: "bl" },
  { src: "scroll.png", place: "br" },
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
