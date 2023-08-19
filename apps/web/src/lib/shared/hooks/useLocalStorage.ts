import { useCallback, useState } from 'react';
import { IS_CLIENT } from '../constants';

type ValueOrFunction = string | ((state: string) => string);
type Return = [string, (value: ValueOrFunction) => void];

export function useLocalStorage(key: string, defaultValue: string): Return {
  const [state, setState] = useState(() => {
    let storedValue: string | null = null;
    if (IS_CLIENT) storedValue = window.localStorage.getItem(key);

    return storedValue ?? defaultValue;
  });

  const setValue = useCallback(
    (value: ValueOrFunction) =>
      setState((currentState) => {
        const store = value instanceof Function ? value(currentState) : value;
        window.localStorage.setItem(key, store);

        return store;
      }),
    [key]
  );

  return [state, setValue];
}
