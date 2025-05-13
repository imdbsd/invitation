import {useInView} from 'react-intersection-observer';
import useTrack from '../hooks/useTrack';
import useSearchParams from '../hooks/useSearchParams';

const EndView = () => {
  const params = useSearchParams<'to'>();
  const [trackReachEnd] = useTrack('End');
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) {
        trackReachEnd(params?.to || '-');
      }
    },
  });
  return (
    <>
      <p className="text-xs font-cormorant mt-4">Terimakasih.</p>
      <h3 ref={ref} className="font-cormorant font-bold">
        Surya & Apri
      </h3>
    </>
  );
};

export default EndView;
