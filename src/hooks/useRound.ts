import { useCallback, useState } from 'react';

export interface RoundHookProps {
  round: number;
  active: boolean;
  nextRound: () => void;
  resetRound: () => void;
}

const useRound = (): RoundHookProps => {
  const [round, setRound] = useState<number>(1);
  const [active, setActive] = useState<boolean>(false);

  const nextRound = useCallback(() => {
    setRound((prevRound) => prevRound + 1);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 300);
  }, []);

  const resetRound = useCallback(() => {
    setRound(1);
  }, []);

  return { round, active, nextRound, resetRound };
};

export default useRound;
