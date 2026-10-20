import { useEffect, useState } from 'react';

export const useTypewriter = (
  words: string[],
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseTime = 2000
) => {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIdx];
    let timeout: number;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = window.setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = window.setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (text.length > 0) {
        timeout = window.setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        timeout = window.setTimeout(() => {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};
