const flowers = [
  { src: "lilies.png", side: "left", top: "7rem", height: "15rem" },
  { src: "roses.png", side: "right", top: "32rem", height: "18rem" },
  { src: "blossoms.png", side: "left", top: "62rem", height: "17rem" },
  { src: "cream-blossoms.png", side: "right", top: "94rem", height: "14rem" },
  { src: "lilies.png", side: "right", top: "126rem", height: "13rem" },
  { src: "roses.png", side: "left", top: "158rem", height: "16rem" },
  { src: "blossoms.png", side: "right", top: "192rem", height: "16rem" },
  { src: "cream-blossoms.png", side: "left", top: "226rem", height: "13rem" },
] as const;

function flowerSrc(file: string) {
  return `${import.meta.env.BASE_URL}${file}`;
}

export function SiteFlowers() {
  return (
    <div className="site-flowers" aria-hidden="true">
      {flowers.map((flower) => (
        <img
          key={`${flower.src}-${flower.top}`}
          className={`flower side-${flower.side}`}
          src={flowerSrc(flower.src)}
          alt=""
          style={{ top: flower.top, height: flower.height }}
        />
      ))}
    </div>
  );
}
