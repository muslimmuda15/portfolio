"use client";

import { useState, useEffect } from "react";

interface StreamingTextProps {
  text: string;
  className?: string;
  onUpdate?: () => void;
}

export default function StreamingText({
  text,
  className = "",
  onUpdate,
}: StreamingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);

        // Trigger scroll callback
        if (onUpdate) {
          onUpdate();
        }
      }, 20); // Adjust speed here (20ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, onUpdate]);

  return <p className={className}>{displayedText}</p>;
}
