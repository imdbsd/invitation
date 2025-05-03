import {createHashRouter, RouterProvider} from 'react-router';

import HomePage from './pages/HomePage';
import Siraman from './pages/SiramanPage';
import RouteError from './components/RouteError';

const routerConfigs = createHashRouter([
  {
    path: '/',
    ErrorBoundary: RouteError,
    children: [
      {index: true, Component: HomePage},
      {path: 'siraman', Component: Siraman},
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routerConfigs} />;
};

export default Router;
