import * as React from 'react';
import {formatToUTC} from '../helpers/common';
import {BASE_SCRIPT_TRACKING} from './configs';
import useSearchParams from './useSearchParams';

export interface Wish {
  name: string;
  comment: string;
  createdAt: string;
}

const useTrack = (sheetName: string) => {
  const params = useSearchParams<'shareId'>();
  const [loading, setLoading] = React.useState(false);
  const tracked = React.useRef(false);

  const submit = React.useRef(async (name?: string | null) => {
    const trackingName = name === '-' || !name ? 'Unknown' : name;
    try {
      if (!loading && !tracked.current) {
        tracked.current = true;
        setLoading(true);
        await fetch(
          `${BASE_SCRIPT_TRACKING}?path=${sheetName}&action=write&name=${trackingName}&shareId=${
            params?.shareId || 'Unknown'
          }&time=${formatToUTC(new Date())}`
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
