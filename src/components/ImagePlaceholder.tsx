type ImagePlaceholderProps = {
  caption: string;
  ratio: "4-3" | "16-9";
};

export function ImagePlaceholder({ caption, ratio }: ImagePlaceholderProps) {
  return (
    <div className={`placeholder ratio-${ratio}`} role="img" aria-label={caption}>
      <span>{caption}</span>
    </div>
  );
}
