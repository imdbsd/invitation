import * as React from 'react';
import toast, {Toaster, ToastOptions} from 'react-hot-toast';
import {ToastContext, ToastFn} from './Context';

const BASE_OPTION: ToastOptions = {
  duration: 3000,
  position: 'bottom-center',
};

export const ToastProvider = (props: React.PropsWithChildren) => {
  const toastFN = React.useCallback<ToastFn>(
    (message, type) => {
      switch (type) {
        case 'error': {
          toast.error(message, BASE_OPTION);
          break;
        }
        case 'success': {
          toast.success(message, BASE_OPTION);
          break;
        }
        default: {
          toast(message, BASE_OPTION);
        }
      }
    },
    []
  );
  return (
    <>
      <ToastContext.Provider value={{toast: toastFN}}>
        {props.children}
      </ToastContext.Provider>
      <Toaster
        toastOptions={{
          style: {
            color: 'white',
            fontWeight: 500,
            paddingLeft: '50px',
            paddingRight: '50px',
          },
          success: {
            iconTheme: {
              primary: 'white',
              secondary: '#F7CFD8',
            },
            style: {
              background: '#F7CFD8',
            },
          },
          error: {
            iconTheme: {
              primary: 'white',
              secondary: '#DA6C6C',
            },
            style: {
              background: '#DA6C6C',
            },
          },
        }}
      />
    </>
  );
};
