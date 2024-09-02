import { useState } from 'react';

export const useClipboard = () => {
  const [clipboardData, setClipboardData] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      setError('Failed to copy text to clipboard');
    }
  };

  const readClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setClipboardData(text);
    } catch (err) {
      setError('Failed to read from clipboard');
    }
  };

  return { clipboardData, copyToClipboard, readClipboard, error };
};
