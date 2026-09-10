"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// "Protect the User / the App / the Device" — cycling reel, DESIGN.md §5.1.
// Ported from the export's own component script: .swap gets a single fixed
// width (the widest word + 16px, measured once) so the layout never jumps
// as shorter/longer words rotate through — it does not resize per word.
// Loops seamlessly by rendering the word list with the first word repeated
// at the end, translating through all of them, then snapping back to 0
// without a transition once the duplicate has scrolled into view.
export default function HeroRotator({ words }: { words: string[] }) {
  const loop = [...words, words[0]];
  const [index, setIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const [swapWidth, setSwapWidth] = useState<number | undefined>(undefined);
  const wordRefs = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const widths = wordRefs.current.slice(0, words.length).map((el) => el?.offsetWidth ?? 0);
    setSwapWidth(Math.max(...widths) + 16);
  }, [words]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index === loop.length - 1) {
      const t = setTimeout(() => {
        setNoTransition(true);
        setIndex(0);
      }, 520);
      return () => clearTimeout(t);
    }
    if (noTransition) {
      const t = requestAnimationFrame(() => setNoTransition(false));
      return () => cancelAnimationFrame(t);
    }
  }, [index, loop.length, noTransition]);

  return (
    <p className="protect">
      Protect
      <span className="swap" style={{ width: swapWidth }}>
        <span className="reel">
          <span
            className="rin"
            style={{
              transform: `translateY(-${index * 1.35}em)`,
              transition: noTransition ? "none" : undefined,
            }}
          >
            {loop.map((word, i) => (
              <em
                key={i}
                ref={(el) => {
                  if (i < words.length) wordRefs.current[i] = el;
                }}
              >
                {word}
              </em>
            ))}
          </span>
        </span>
      </span>
      <span className="caret" aria-hidden="true" />
    </p>
  );
}
