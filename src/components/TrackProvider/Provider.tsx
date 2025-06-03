import * as React from 'react';
import {v4 as uuidv4} from 'uuid';
import {TrackContext} from './Context';
import useSearchParams from '../../hooks/useSearchParams';

const TRACK_ID_KEY = '2v4TCobBC3';

export const TrackProvider = (props: React.PropsWithChildren) => {
  const params = useSearchParams<'to'>();
  const uuid: string | null = React.useMemo(() => {
    if (typeof window === 'undefined') return null;

    const key = `${TRACK_ID_KEY}${params?.to ? `-${params.to}` : ''}`;

    const storedUUID = window.localStorage.getItem(key);
    if (storedUUID) return storedUUID;

    const generatedUUID = uuidv4();

    window.localStorage.setItem(key, generatedUUID);

    return generatedUUID;
  }, [params]);

  return (
    <TrackContext.Provider value={{uuid}}>
      {props.children}
    </TrackContext.Provider>
  );
};
