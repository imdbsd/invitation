import {createBrowserRouter, RouterProvider} from 'react-router';

import HomePage from './pages/HomePage';
import Siraman from './pages/SiramanPage';

const routerConfigs = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {path: '/siraman', Component: Siraman},
]);

const Router = () => {
  return <RouterProvider router={routerConfigs} />;
};

export default Router;
