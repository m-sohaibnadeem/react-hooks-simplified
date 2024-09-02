import { useCallback, useState } from 'react';

export const useSpeechSynthesis = () => {
  const [speaking, setSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const speak = useCallback((text: string, options?: SpeechSynthesisUtterance) => {
    if (!window.speechSynthesis) {
      setError('SpeechSynthesis is not supported in this browser');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    Object.assign(utterance, options);

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = (e) => setError(e.error);

    window.speechSynthesis.speak(utterance);
  }, []);

  const cancel = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  return { speaking, error, speak, cancel };
};
