import * as React from 'react';
import {v4 as uuidv4} from 'uuid';
import {TrackContext} from './Context';

const TRACK_ID_KEY = '2v4TCobBC3';

export const TrackProvider = (props: React.PropsWithChildren) => {
  const uuid: string | null = React.useMemo(() => {
    if (typeof window === 'undefined') return null;

    const storedUUID = window.localStorage.getItem(TRACK_ID_KEY);
    if (storedUUID) return storedUUID;

    const generatedUUID = uuidv4();

    window.localStorage.setItem(TRACK_ID_KEY, generatedUUID);

    return generatedUUID;
  }, []);

  return (
    <TrackContext.Provider value={{uuid}}>
      {props.children}
    </TrackContext.Provider>
  );
};
