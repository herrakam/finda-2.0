import { useState, useEffect } from 'react';

interface UseDebounceProps {
  delay: number;
}

export const useDebounce = <T>(
  value: T,
  options: UseDebounceProps = { delay: 500 },
) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, options.delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, options.delay]);

  return debouncedValue;
};
