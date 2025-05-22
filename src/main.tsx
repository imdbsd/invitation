// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
import {ViteReactSSG} from 'vite-react-ssg';
// import App from './App.tsx';
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

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
