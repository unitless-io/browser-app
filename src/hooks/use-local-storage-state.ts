import { useCallback, useState } from 'react';
import { get, set } from 'local-storage';

function useLocalStorageState<T extends object>(lsKey: string, defaultValue: T): [T, (value: T) => void] {
  const storedString = get<string>(lsKey);
  const storedState = storedString ? (JSON.parse(storedString) as T) : null;

  const [state, setState] = useState<T>(storedState || defaultValue);
  const setLocalStorageState = useCallback(
    (value: T) => {
      set(lsKey, JSON.stringify(value));
      setState(value);
    },
    [lsKey]
  );

  return [state, setLocalStorageState];
}

export default useLocalStorageState;
