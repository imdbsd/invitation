import * as React from 'react';
import {ToastProvider} from './ToastContext/Provider';
import MediaContextProvider from './MediaContext/Provider';
import {TrackProvider} from './TrackProvider/Provider';

const AppProvider = (props: React.PropsWithChildren) => {
  return (
    <TrackProvider>
      <ToastProvider>
        <MediaContextProvider>{props.children}</MediaContextProvider>
      </ToastProvider>
    </TrackProvider>
  );
};

export default AppProvider;
