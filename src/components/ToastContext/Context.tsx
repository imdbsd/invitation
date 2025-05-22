import * as React from 'react';

export type ToastFn = (message: string, type?: 'success' | 'error') => void;

export const ToastContext = React.createContext<{toast: ToastFn}>({
  toast: () => {},
});

export const useToast = () => React.useContext(ToastContext);
