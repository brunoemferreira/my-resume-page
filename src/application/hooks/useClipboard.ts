import { useState } from 'react';

export const useClipboard = (timeout = 2500) => {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch {
      setCopied(false);
      return false;
    }
  };

  return { copied, copy };
};
