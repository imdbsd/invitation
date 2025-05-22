import {ViteReactSSG} from 'vite-react-ssg';
import {routeSSGConfig} from './Router.tsx';

import 'react-loading-skeleton/dist/skeleton.css';

export const createRoot = ViteReactSSG({routes: routeSSGConfig});
