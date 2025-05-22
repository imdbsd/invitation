import type {RouteRecord} from 'vite-react-ssg';

import HomePage from './pages/HomePage';
import Siraman from './pages/SiramanPage';
import RouteError from './components/RouteError';

export const routeSSGConfig: Array<RouteRecord> = [
  {path: '/', Component: HomePage},
  {path: '/siraman', Component: Siraman},
  {path: '404', Component: RouteError},
  {path: '*', Component: RouteError},
];
