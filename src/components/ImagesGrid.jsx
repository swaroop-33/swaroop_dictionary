import { memo } from "react";

function ImagesGrid({ photos = [] }) {
  if (!photos.length) return null;

  return (
    <div className="grid grid-4">
      {photos.map((p) => {
        const src = p.src?.medium || p.src?.small;
        const alt = p.alt || "Related image";

        return (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="image-link"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
              className="image"
            />
          </a>
        );
      })}
    </div>
  );
}

export default memo(ImagesGrid);