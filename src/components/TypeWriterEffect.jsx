import { useState, useEffect, useMemo } from "react";

const TypeWriterEffect = () => {
  const words = useMemo(
    () => ["Fullstack Developer", "UI/UX Designer", "Software Engineer"],
    [],
  );
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const caretTimer = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500);
    return () => clearInterval(caretTimer);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing mode
          if (charIndex < currentWord.length) {
            setText(currentWord.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Word complete, pause then start deleting
            setTimeout(() => {
              setIsDeleting(true);
            }, 1200); // Reduced from 2000ms to 1200ms
          }
        } else {
          // Deleting mode
          if (charIndex > 0) {
            setText(currentWord.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Word deleted, move to next word
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
            setCharIndex(0);
          }
        }
      },
      isDeleting ? 70 : 120,
    ); // Reduced from 100/200ms to 70/120ms

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span className="text-emerald-400 ml-1">
      {text}
      <span
        className={`${showCaret ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
};

export default TypeWriterEffect;
