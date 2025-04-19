import {addBaseURL} from '../helpers/common';

const GoPayCard = () => {
  return (
    <div className="bg-white p-1 rounded-2xl">
      <div
        className="w-full flex items-center flex-col bg-white p-4 rounded-2xl"
        style={{
          backgroundImage: `url('${addBaseURL('card-bg.webp')}')`,
          backgroundSize: '100% 250px',
        }}
      >
        <div>
          <img src={addBaseURL('gopaylogo.png')} className="w-[120px]" />
        </div>
        <img
          src={addBaseURL('gopayqr.png')}
          width={72}
          height={72}
          className="w-[150px] h-full"
        />
        <p className="text-xs font-poppins tracking-[5px] mt-4">
          a.n. Surya Darma
        </p>
      </div>
    </div>
  );
};

export default GoPayCard;
