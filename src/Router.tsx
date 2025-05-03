import {createBrowserRouter, RouterProvider} from 'react-router';

import HomePage from './pages/HomePage';

const routerConfigs = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
]);

const Router = () => {
  return <RouterProvider router={routerConfigs} />;
};

export default Router;
