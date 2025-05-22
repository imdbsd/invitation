import * as React from 'react';
import html2canvas from 'html2canvas';
import {useToast} from '../components/ToastContext/Context';

type Props = {
  fileName?: string;
  lazy?: boolean;
};

const useCaptureElement = (props: Props = {}) => {
  const {toast} = useToast();
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const [capturedFile, setCapturedFile] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const capture = React.useCallback(async () => {
    if (!elementRef.current) return;
    try {
      setLoading(true);
      // Capture the  element
      const canvas = await html2canvas(elementRef.current, {
        useCORS: true,
        allowTaint: false,
        backgroundColor: null, // Transparent background
        scale: 2, // High quality
      });
      // Convert to Blob
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error('Failed convert to blob');
        }
        const file = new File(
          [blob],
          `${props.fileName || 'shared-image'}.jpg`,
          {
            type: 'image/jpeg',
          }
        );
        setCapturedFile(file);
      }, 'image/jpeg');
    } catch (error) {
      if (error instanceof Error) {
        toast('Failed to share!', 'error');
      }
    } finally {
      setLoading(false);
    }
  }, [props.fileName]);

  React.useEffect(() => {
    if (!props.lazy) {
      capture();
    }
  }, [capture, props.lazy]);

  return {
    elementRef,
    capturedFile,
    loading,
    capture,
  };
};

export default useCaptureElement;
