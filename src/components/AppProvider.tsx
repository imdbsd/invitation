import * as React from 'react';
import {ToastProvider} from './ToastContext/Provider';
import MediaContextProvider from './MediaContext/Provider';

const AppProvider = (props: React.PropsWithChildren) => {
  return (
    <ToastProvider>
      <MediaContextProvider>{props.children}</MediaContextProvider>
    </ToastProvider>
  );
};

export default AppProvider;
