"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type StageImage = { key: string; src: string; alt: string; caption?: string; position?: string };

// The fixed half of the split. Any element in the same split with data-stage="<key>"
// swaps the picture when it crosses the middle of the screen.
export default function Stage({ images, priority }: { images: StageImage[]; priority?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(images[0].key);

  useEffect(() => {
    const split = ref.current?.parentElement;
    if (!split || images.length < 2) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.stage!);
      }),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    split.querySelectorAll("[data-stage]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [images.length]);

  return (
    <aside ref={ref} className="stage">
      <div className="stage-frame">
        {images.map((img, i) => (
          <figure key={img.key} className={`stage-img${img.key === active ? " on" : ""}${i === 0 ? " first" : ""}`} style={{ margin: 0 }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 860px) 100vw, 47vw"
              priority={priority && i === 0}
              style={{ objectPosition: img.position ?? "50% 50%" }}
            />
            {img.caption && <figcaption className="stage-cap">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </aside>
  );
}
