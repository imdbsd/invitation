import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IGShareTemplate from './IGShareTemplate';
import useCaptureElement from '../hooks/useCapture';
import {addBaseURL} from '../helpers/common';
import Skeleton from 'react-loading-skeleton';
import useTrack from '../hooks/useTrack';
import useSearchParams from '../hooks/useSearchParams';

const ShareToInstagram = () => {
  const params = useSearchParams<'to'>();
  const [trackShare] = useTrack('IGShare')
  const sharePortalElement =
    typeof document !== 'undefined'
      ? document.getElementById('share-portal')
      : null;

  const {capturedFile, elementRef, loading} = useCaptureElement({
    fileName: 'surya-apri-ig-share',
  });

  const isSupportShareToIG = React.useMemo(() => {
    if (!capturedFile) {
      return false;
    }
    if (
      typeof navigator !== 'undefined' &&
      capturedFile &&
      navigator.canShare &&
      navigator.canShare({files: [capturedFile]})
    ) {
      return true;
    }
    console.error('Web Share API is not supported on this browser');
    return false;
  }, [capturedFile]);

  const shareToIG = React.useCallback(() => {
    trackShare(params?.to || '-');
    if (capturedFile) {
      navigator
        .share({
          files: [capturedFile],
          // title: 'The Wedding of Surya & Apri',
          title: 'The Wedding Reception of Surya & Apri'
        })
        .catch(() => {
          console.error('Web Share API is not supported on this browser');
        });
    }
  }, [capturedFile]);

  if (!sharePortalElement) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <IGShareTemplate containerRef={elementRef} />,
        sharePortalElement
      )}
      {isSupportShareToIG ? (
        loading ? (
          <Skeleton height={50} width={90} baseColor="#dadada" />
        ) : (
          <button
            onClick={shareToIG}
            className="mt-10 flex flex-row items-center bg-yellow-beach p-2 rounded-sm text-xs font-poppins cursor-pointer"
          >
            Share to
            <img className="ml-2 w-6" src={addBaseURL('instagram.svg')} />
          </button>
        )
      ) : null}
    </>
  );
};

export default ShareToInstagram;
