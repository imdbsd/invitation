import {useLocation} from 'react-router-dom';
type Params<TKey extends string = string> = Record<TKey, string | null>;

const useSearchParams = <TKey extends string = string>():
  | Params<TKey>
  | undefined => {
  const reactRouterDomLocation = useLocation()
  if (typeof window !== 'undefined') {
    let search = window.location.search;

    if (!search && reactRouterDomLocation.search) {
      search = reactRouterDomLocation.search;
    }

    const params = new URLSearchParams(search);

    const keys = [...params.keys()];
    if (keys.length > 0) {
      const searchParams: Params<TKey> = {} as Params<TKey>;
      keys.forEach((key) => {
        searchParams[key as TKey] = params.get(key);
      });
      return searchParams;
    }
  }
};

export default useSearchParams;
