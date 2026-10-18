type SourceNoteProps = {
  source: string;
};

export function SourceNote({ source }: SourceNoteProps) {
  const isLink = /^https?:\/\//.test(source);

  return (
    <p className="source">
      <span className="source-label">Source</span>
      {isLink ? (
        <a href={source} target="_blank" rel="noreferrer">
          {source.replace(/^https?:\/\//, "")}
        </a>
      ) : (
        <span>{source}</span>
      )}
    </p>
  );
}
