import * as React from 'react';
import {Copy} from 'lucide-react';
import {useCopyToClipboard} from 'usehooks-ts';
import {useToast} from './ToastContext/Context';
import {addBaseURL} from '../helpers/common';

interface Props {
  address: string;
  name: string;
  bank: 'BCA' | 'BNI';
  onClick?: () => void
}

const ATMCard = (props: Props) => {  
  const [, copy] = useCopyToClipboard();
  const {toast} = useToast();

  const handleCopy = React.useCallback(() => {    
    props.onClick?.()
    copy(props.address)
      .then(() => {
        toast('Copied!', 'success');
      })
      .catch((error) => {
        console.error('Failed to copy!', error);
        toast('Failed to copy!!', 'error');
      });
  }, [props.address, props.onClick]);

  return (
    <div
      className="w-full h-[250px] rounded-xl relative bg-cover p-1 bg-white overflow-hidden"
      onClick={handleCopy}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 m-1 rounded-xl"
        style={{
          backgroundImage: `url('${addBaseURL('card-bg.webp')}')`,
          backgroundSize: '100% 250px',
        }}
      />
      <div className="relative flex flex-col h-full">
        <div className="flex justify-end w-full items-center flex-1">
          <img
            src={
              props.bank === 'BCA'
                ? addBaseURL('logo-bca.png')
                : addBaseURL('logo-bni.png')
            }
            className="w-[100px] mr-3"
          />
        </div>
        <div className="flex justify-start w-full flex-1 items-center">
          <img src={addBaseURL('atm-chip.png')} className="w-[40px] ml-3" />
        </div>
        <div className="w-full text-left flex flex-col flex-1 justify-center pl-3">
          <div className="flex items-center mb-2 cursor-pointer">
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
