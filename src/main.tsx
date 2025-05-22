import {ViteReactSSG} from 'vite-react-ssg';
import {routeSSGConfig} from './Router.tsx';

import 'react-loading-skeleton/dist/skeleton.css';

export const createRoot = ViteReactSSG(
  // react-router-dom data routes
  {routes: routeSSGConfig},
  // function to have custom setups
  // ({router, routes, isClient, initialState}) => {
  //   // do something.
  // }
);