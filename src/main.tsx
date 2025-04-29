import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import MediaContextProvider from './components/MediaContext/Provider.tsx';

import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MediaContextProvider>
      <App />
    </MediaContextProvider>
  </StrictMode>
);
