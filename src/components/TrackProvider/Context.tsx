import * as React from 'react';

export const TrackContext = React.createContext<{uuid: string | null}>({
  uuid: null,
});

export const useTrackContext = () => React.useContext(TrackContext);
