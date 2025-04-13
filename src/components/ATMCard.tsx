import * as React from 'react';
import {Copy} from 'lucide-react';
import {useCopyToClipboard} from 'usehooks-ts';
import toast from 'react-simple-toasts';

import 'react-simple-toasts/dist/style.css';
import 'react-simple-toasts/dist/theme/pink-dawn.css';
import 'react-simple-toasts/dist/theme/failure.css';

interface Props {
  address: string;
  name: string;
}

const ATMCard = (props: Props) => {
  const [, copy] = useCopyToClipboard();

  const handleCopy = React.useCallback(() => {
    copy(props.address)
      .then(() => {
        toast('Copied!', {theme: 'pink-dawn'});
      })
      .catch((error) => {
        console.error('Failed to copy!', error);
        toast('Failed to copy!', {theme: 'failure'});
      });
  }, [props.address]);

  return (
    <div className="w-full h-[250px] rounded-xl relative bg-cover p-1 bg-white overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 m-1 rounded-xl"
        style={{
          backgroundImage: `url('/card-bg.webp')`,
          backgroundSize: '100% 250px',
        }}
      />
      <div className="relative flex flex-col h-full">
        <div className="flex justify-end w-full items-center flex-1">
          <img src={'/logo-bca.png'} className="w-[100px] mr-3" />
        </div>
        <div className="flex justify-start w-full flex-1 items-center">
          <img src={'/atm-chip.png'} className="w-[40px] ml-3" />
        </div>
        <div className="w-full text-left flex flex-col flex-1 justify-center pl-3">
          <div
            className="flex items-center mb-2 cursor-pointer"
            onClick={handleCopy}
          >
            <p className="text-xs font-poppins tracking-[10px]">
              {props.address}
            </p>
            <div className="flex flex-row items-center">
              <Copy width={14} height={14} />
              <span className="text-xs ml-1 text-gray-[#dadada]">
                Click to copy
              </span>
            </div>
          </div>
          <p className="text-xs font-poppins tracking-[2px]">
            a.n. {props.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ATMCard;
