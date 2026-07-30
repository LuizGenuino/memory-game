import { useEffect, useRef, useState } from 'react';

interface UseTimerProps {
  initialSeconds: number;
  isRunning: boolean;
  onComplete?: () => void;
}

export const useTimer = ({ initialSeconds, isRunning, onComplete }: UseTimerProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (!isRunning) return;
    if (seconds <= 0) {
      onCompleteRef.current?.();
      return;
    }
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning, seconds]);

  return { seconds, setSeconds };
};
