import {addBaseURL} from '../helpers/common';
import SectionWrapper from './SectionWrapper';

const PHOTOSHOOTS = [
  {
    title: 'Lamaran & Siraman (1 Juni 2025)',
    qr: addBaseURL('qr-siraman.png'),
    link: 'https://drive.google.com/drive/folders/1ZURNHXAxarFBCqwgmibgspPXZqvSMfvO',
  },
  {
    title: 'Mekalan - kalan (8 Juni 2025)',
    qr: addBaseURL('qr-mekalan-kalan.png'),
    link: 'https://drive.google.com/drive/folders/1jrHzlEeO8A0--DlTOiVBqCujgc3hRfSM',
  },
] as const;

const SectionPhotoshoot = () => {
  return (
    <SectionWrapper
      className="min-h-[200px] bg-[#F2EEE8] py-16"
      id="section-photoshoot"
    >
      <div className="relative px-5 pb-8 text-center">
        <h2 className="text-3xl font-cormorant italic font-medium mb-6">
          Photoshoot
        </h2>
      </div>
      <div className="px-4">
        {PHOTOSHOOTS.map((photoshoot) => (
          <div
            className="flex flex-col items-center mb-4"
            key={photoshoot.title}
          >
            <p className="mb-2 font-cormorant text-lg">{photoshoot.title}</p>
            <a href={photoshoot.link} target="_blank" className='flex justify-center'>
              <img
                className="w-1/2 ml-3"
                src={photoshoot.qr}
                alt={photoshoot.title}
              />
            </a>
            <p className="mb-2 font-cormorant mt-2">
              <a href={photoshoot.link} target="_blank">
                Tautan Google Drive
              </a>
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SectionPhotoshoot;
