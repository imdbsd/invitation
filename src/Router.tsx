import type { RouteRecord } from 'vite-react-ssg'
// import {createHashRouter, RouterProvider} from 'react-router';

import HomePage from './pages/HomePage';
import Siraman from './pages/SiramanPage';
// import RouteError from './components/RouteError';

// const routerConfigs = createHashRouter([
//   {
//     path: '/',
//     ErrorBoundary: RouteError,
//     children: [
//       {index: true, Component: HomePage},
//       {path: 'siraman', Component: Siraman},
//     ],
//   },
// ]);

// const Router = () => {
//   return <RouterProvider router={routerConfigs} />;
// };

// export default Router;

export const routeSSGConfig: Array<RouteRecord> = [
 {path: '/', Component: HomePage},
 {path: '/siraman', Component: Siraman},
 {path: '404', Component: () => <h1>404 Not Found</h1>},
 {path: '*', Component: () => <h1>404 Not Found</h1>} 
]
