import * as React from 'react';
import {WishListSchema, WishList} from '../schema';
import {BASE_SCRIPT_URL} from './configs';

const useFetchWish = (option?: {skip?: boolean}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<WishList | undefined>();

  const fetchWishRef = React.useRef(async () => {
    try {
      if (!loading) {
        setLoading(true);
        const response = await fetch(`${BASE_SCRIPT_URL}?path=Sheet1&action=read`);
        const responseData = await response.json();

        if ('data' in responseData && responseData.data instanceof Array) {
          const parsed = await WishListSchema.safeParseAsync(responseData.data);
          if (parsed.success) {
            setData(
              parsed.data.filter((wishData) =>
                Boolean(wishData.name && wishData.wish && wishData.createdAt)
              )
            );
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  });

  React.useEffect(() => {
    if (!option?.skip) fetchWishRef.current();
  }, [option?.skip]);

  return [data, loading] as const;
};

export default useFetchWish;
