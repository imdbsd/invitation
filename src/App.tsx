import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import SectionWrapper from './components/SectionWrapper';
import {Calendar, Gift} from 'lucide-react';
import EventCard from './components/EventCard';
import Separator from './components/Separator';

import ATMCard from './components/ATMCard';
import Gallery, {GalleryImages} from './components/Gallery';
import YoutubePlayer from './components/YoutubePlayer';

import 'react-loading-skeleton/dist/skeleton.css';

const Countdown = React.lazy(() => import('./components/Countdown'));

const dDate = 'Wed Jun 11 2025 00:00:00 GMT+0800';

const images: GalleryImages = [
  {src: '/galleries/gallery-1.jpg', width: 1920, height: 1080},
  {src: '/galleries/gallery-2.jpg', width: 1080, height: 1920},
];

const Page = () => {
  const [openGift, setOpenGift] = React.useState(false);
  return (
    <>
      <SectionWrapper
        bgImage={{
          src: '/galleries/gallery-3.jpg',
          className: 'bg-[center_-150px]',
        }}
      >
        <div
          className="h-screen w-full mx-auto relative z-20"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgba(255, 241, 213, 1) 80%)',
          }}
        >
          {/* <div className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center flex">
            <div className="h-2/3 w-3/4 rounded-full border-yellow-beach border-double border-[5px]" />
          </div> */}
          <div className="absolute bottom-[75px] right-0 left-0 flex flex-col justify-center items-center z-10">
            <h1 className="flex flex-col items-center text-[#4B3B2A] text-sm tracking-[2px] font-normal">
              <span>THE WEDDING OF</span>
            </h1>
            <p className="block text-4xl text-[#4B3B2A] font-cormorant">
              Apri & Surya
            </p>
            <p className="text-[#4B3B2A] text-center text-sm tracking-[2px] font-normal">
              <span className="block">Kepada Yth.</span>
              <span className="block">Bapak/ Ibu/ Saudara/ i</span>
            </p>
            <p className="font-cormorant text-base font-normal bg-white p-3 rounded-sm mt-4">
              Justin Bieber
            </p>
          </div>
        </div>
        {/* https://support.google.com/calendar/thread/81344786/how-do-i-generate-add-to-calendar-link-from-our-own-website?hl=en */}
      </SectionWrapper>
      <SectionWrapper
        className="md:min-h-[60vh]"
        bgImage={{src: '/asset-sections/bg-image-2.jpg'}}
      >
        <div
          className="h-screen w-full mx-auto absolute"
          style={{
            background: 'rgba(255, 241, 213, 0.5) 0%',
          }}
        ></div>
        <div className="relative p-4 h-screen flex flex-col justify-around">
          <img
            src={'/logo.png'}
            width={500}
            height={500}
            alt="logo"
            className="w-[150px] h-[150px] mx-auto"
          />

          <div>
            <p className="font-cormorant italic text-center text-lg mb-2">
              Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau
              putrair naptrbhih, modamanau sve grhe.
            </p>
            <p className="text-center font-cormorant text-lg mb-2">
              (Rg Veda X.85.42)
            </p>
            <p className="font-cormorant">
              Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
              pernah terpisahkan. Semoga kalian mencapai hidup penuh
              kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama
              seluruh keturunanmu.
            </p>
          </div>
          <div>
            <Separator>
              <p className="text-center font-cormorant text-xl mx-2">
                Countdown to:
              </p>
            </Separator>
            <div className="[&>*:not(:last-child)]:mb-5">
              <p className="text-center font-cormorant text-4xl italic font-bold">
                11 Juni 2025
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex flex-row items-center bg-white p-2 rounded-sm text-xs font-poppins"
                  target="_blank"
                >
                  <Calendar className="mr-2" width={16} height={16} />
                  <span>Add to Calendar</span>
                </a>
              </div>
              <React.Suspense
                fallback={<Skeleton height={80} baseColor="#dadada" />}
              >
                <Countdown startValue={dDate} />
              </React.Suspense>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper bgImage={{src: '/asset-sections/bg-image-3.jpg'}}>
        <div
          className="h-screen w-full mx-auto absolute"
          style={{
            background: 'rgb(73 66 54 / 78%) 0%',
          }}
        ></div>
        <div className="relative text-white p-4 h-screen w-full flex items-center flex-col justify-evenly">
          <h3 className="font-cormorant text-4xl text-center my-2">Mempelai</h3>
          <img
            src={'/asset-sections/mempelai.jpg'}
            alt="surya & apri"
            width={240}
            height={150}
            className="rounded-xl w-[480px] border-double border-[3px] border-yellow-beach"
          />
          <div className="text-center">
            <div className="text-center">
              <p className="text-goldy text-3xl font-cormorant">
                I Made Budi Surya Darma
              </p>
              <p>Putra dari Bapak I Made Damiartha & Ibu Ni Ketut Bukti</p>
            </div>
            <p className="text-goldy text-3xl font-cormorant">&</p>
            <div className="text-center">
              <p className="text-goldy text-3xl font-cormorant">
                Apriyanti Nurcahyani
              </p>
              <p>Putri dari Bapak. Suwardi & Ibu Parnasih</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="relative px-4 pt-4 pb-20 w-full min-h-screen flex items-center flex-col justify-evenly">
          <img
            src={'/cloudy.png'}
            alt="cloud"
            width={1024}
            height={1024}
            className="w-[150px] h-[150px] absolute top-[10px] right-[-60px]"
          />
          <img
            src={'/cloudy.png'}
            alt="cloud"
            width={1024}
            height={1024}
            className="w-[150px] h-[150px] absolute bottom-1 left-10"
          />
          <h3 className="font-monsieur-lad text-4xl my-4 w-full">
            <Separator position="left">
              <span className="font-serif mb-2">Wedding</span>
            </Separator>
            Event
          </h3>
          <p className="font-poppins text-sm text-center mb-4 relative">
            Tanpa mengurangi rasa hormat dengan ini kami mengundang
            Bapak/Ibu/Saudara/i untuk hadir dalam acara Pernikahan Putra-Putri
            kami pada
          </p>
          <div className="relative [&>*:not(:last-child)]:mb-10">
            <Separator position="right">
              <h4 className="font-cormorant text-4xl text-center mx-2.5 italic text-goldy">
                Bali
              </h4>
            </Separator>
            <EventCard
              title="Pawiwahan"
              bgImage={'/asset-sections/assets-event1.jpg'}
              dayName="Rabu"
              date="11 Juni 2025"
              startAndEnd="07.00 - 12.00 WITA"
              location="Kediaman Mempelai Pria Jl. Siligita No.1, Banjar, Peminge, Kabupaten Badung, Bali"
              gMap="https://maps.app.goo.gl/DcMf4eq2qtz1kgzNA"
            />
            <EventCard
              title="Resepsi"
              bgImage={'/asset-sections/assets-event1.jpg'}
              dayName="Rabu"
              date="11 Juni 2025"
              startAndEnd="12.00 - 17.00 WITA"
              location="Kediaman Mempelai Pria Jl. Siligita No.1, Banjar, Peminge, Kabupaten Badung, Bali"
              gMap="https://maps.app.goo.gl/DcMf4eq2qtz1kgzNA"
            />
            <Separator position="right">
              <h4 className="font-cormorant text-4xl text-center mx-2.5 italic text-goldy">
                Jakarta
              </h4>
            </Separator>
            <EventCard
              title="Resepsi"
              bgImage={'/asset-sections/assets-event1.jpg'}
              dayName="Rabu"
              date="11 Juni 2025"
              startAndEnd="07.00 - 12.00"
              location="Kediaman Mempelai Pria Jl. Siligita No.1, Banjar, Peminge, Kabupaten Badung, Bali"
              gMap="https://maps.app.goo.gl/DcMf4eq2qtz1kgzNA"
            />
          </div>
          <div className="[&>*:not(:last-child)]:mb-5 mt-5 relative">
            <p className="font-poppins text-sm text-center">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
              Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu
              kepada kedua mempelai.
            </p>
            <p className="text-center font-bold">Keluarga Besar</p>
            <p className="text-center font-bold">I Made Damiartha</p>
            <p className="text-center font-bold">Suwardi</p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper containerClassName="bg-[#00000069]">
        <div className="relative px-4 pt-4 pb-20 w-full min-h-screen flex items-center flex-col justify-evenly">
          <h3 className="font-monsieur-lad text-4xl my-4 text-right w-full text-white">
            <Separator position="right" color="bg-white">
              <span className="font-serif mb-2 text-white ml-2">Wedding</span>
            </Separator>
            Gallery
          </h3>
          <div className="w-full">
            <YoutubePlayer url="https://youtu.be/L6SA8ml-j98" />
          </div>
          <Gallery images={images} />
        </div>
      </SectionWrapper>
      <SectionWrapper className="min-h-0" containerClassName="min-h-0">
        <div className="relative bg-[#F2EEE8] px-4 py-16 text-center">
          <div className="absolute top-0 left-0 w-full border-l-transparent border-l-[100px] border-r-transparent border-r-[100px] border-t-[#dadada] border-t-[50px]" />
          <h2 className="text-3xl font-cormorant italic font-medium mb-6">
            Wedding Gift
          </h2>
          <p className="text-[#4B4B4B] max-w-xl mx-auto mb-8 text-sm font-poppins">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
            jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
            kado melalui:
          </p>
          <button
            className="bg-black text-goldy px-6 py-3 rounded text-sm flex items-center justify-center gap-2 mx-auto"
            onClick={() => {
              setOpenGift((open) => (open === false ? true : open));
            }}
          >
            <Gift /> Kirim Hadiah
          </button>
          {openGift ? (
            <div className="my-5 [&>*:not(:last-child)]:mb-5">
              <ATMCard address="100101010176" name="I Made Budi Surya Darma" />
              <ATMCard address="100101010176" name="I Made Budi Surya Darma" />
            </div>
          ) : null}
          <p className="text-xs mt-4">Terimakasih.</p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Page;
