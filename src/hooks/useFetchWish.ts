import * as React from 'react';
import {WishListSchema, WishList, Wish, WishSchema} from '../schema';
import {BASE_SCRIPT_WISH} from './configs';

const useFetchWish = (option?: {skip?: boolean}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<WishList | undefined>();
  const isFetching = React.useRef(false);

  const fetchWishRef = React.useRef(async () => {
    try {
      if (!loading && !isFetching.current) {
        isFetching.current = true;
        setLoading(true);
        const response = await fetch(
          `${BASE_SCRIPT_WISH}?path=Sheet1&action=read`
        );
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
    isFetching.current = false;
    setLoading(false);
  });

  const pushWishToCache = React.useCallback(async (wish: Wish) => {
    const parsed = await WishSchema.safeParseAsync(wish);
    if (parsed.success) {
      setData((current) =>
        current ? [parsed.data, ...current] : [parsed.data]
      );
    }
  }, []);

  React.useEffect(() => {
    if (!option?.skip) fetchWishRef.current();
  }, [option?.skip]);

  return [data, loading, pushWishToCache] as const;
};

export default useFetchWish;
