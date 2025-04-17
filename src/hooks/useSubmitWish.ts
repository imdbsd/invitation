import * as React from 'react';
import {formatToUTC} from '../helpers/common';
import {BASE_SCRIPT_URL} from './configs';

export interface Wish {
  name: string;
  comment: string;
  createdAt: string;
}

const useSubmitWish = () => {
  const [loading, setLoading] = React.useState(false);

  const submit = React.useRef(async (name: string, wish: string) => {
    try {
      if (!loading) {
        setLoading(true);
        await fetch(
          `${BASE_SCRIPT_URL}?path=Sheet1&action=write&name=${name}&wish=${wish}&createdAt=${formatToUTC(
            new Date()
          )}`
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

export default useSubmitWish;
