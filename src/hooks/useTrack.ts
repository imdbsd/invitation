import * as React from 'react';
import {formatToUTC} from '../helpers/common';
import {BASE_SCRIPT_TRACKING, isDevelopment} from './configs';
import { useTrackContext } from '../components/TrackProvider/Context';

export interface Wish {
  name: string;
  comment: string;
  createdAt: string;
}

const useTrack = (sheetName: string) => {  
  const {uuid} = useTrackContext()
  const [loading, setLoading] = React.useState(false);
  const tracked = React.useRef(false);

  const submit = React.useRef(async (name?: string | null) => {
    const shareId = uuid || 'Unknown';
    const trackingName = name === '-' || !name ? 'Unknown' : name;
    const time = formatToUTC(new Date());

    if (isDevelopment) {
      console.info('track data: ', {sheetName, trackingName, shareId, time});
      return;
    }
    try {
      if (!loading && !tracked.current) {
        tracked.current = true;
        setLoading(true);
        await fetch(
          `${BASE_SCRIPT_TRACKING}?path=${sheetName}&action=write&name=${trackingName}&shareId=${shareId}&time=${time}`
        );
        setLoading(false);
      }
    } catch {
      setLoading(false);
      throw new Error('Gagal mengirim');
    }
  });

  return [submit.current, loading] as const;
};

export default useTrack;
