import Countdown from './components/Countdown';
import heroImage from './assets/preweds/hero-image.png';
import bgImage2 from './assets/preweds/bg-image-2.jpg';
import bgImage3 from './assets/preweds/bg-image-3.jpg';
import coupleImage from './assets/preweds/mempelai.jpg';
import cloudImage from './assets/cloudy.png';
import event1 from './assets/preweds/assets-event1.jpg';
import logo from './assets/logo.png';
import SectionWrapper from './components/SectionWrapper';
import {Clock, MapPin} from 'lucide-react';
import EventCard from './components/EventCard';

const dDate = 'Wed Jun 11 2025 00:00:00 GMT+0800';

const Page = () => {
  return (
    <>
      <SectionWrapper
        bgImage={{
          src: heroImage,
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
      </SectionWrapper>
      <SectionWrapper className="md:min-h-[60vh]" bgImage={{src: bgImage2}}>
        <div
          className="h-screen w-full mx-auto absolute"
          style={{
            background: 'rgba(255, 241, 213, 0.5) 0%',
          }}
        ></div>
        <div className="relative p-4 h-screen flex flex-col justify-around">
          <img
            src={logo}
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
            <p className="text-center font-cormorant text-xl">Countdown to:</p>
            <p className="text-center font-cormorant text-4xl italic font-bold">
              11 Juni 2025
            </p>
            <Countdown startValue={dDate} />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper bgImage={{src: bgImage3}}>
        <div
          className="h-screen w-full mx-auto absolute"
          style={{
            background: 'rgb(73 66 54 / 78%) 0%',
          }}
        ></div>
        <div className="relative text-white p-4 h-screen w-full flex items-center flex-col justify-evenly">
          <h3 className="font-monsieur-lad text-4xl text-center my-2">
            Mempelai
          </h3>
          <img
            src={coupleImage}
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
              <p>Putra dari Bapak I Made Damiartha, SE. & Ibu Ni Ketut Bukti</p>
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
        <div className="relative p-4 w-full flex items-center flex-col justify-evenly">
          <h3 className="font-monsieur-lad text-4xl text-center my-2">
            Wedding Event
          </h3>
          <img
            src={cloudImage}
            alt="cloud"
            width={1024}
            height={1024}
            className="w-[150px] h-[150px] absolute top-1 left-5"
          />
          <img
            src={cloudImage}
            alt="cloud"
            width={1024}
            height={1024}
            className="w-[150px] h-[150px] absolute top-[50%] right-5"
          />
          <img
            src={cloudImage}
            alt="cloud"
            width={1024}
            height={1024}
            className="w-[150px] h-[150px] absolute bottom-1 left-20"
          />
          <div className="relative">
            <EventCard
              title="Pawiwahan"
              bgImage={event1}
              dayName="Rabu"
              date="11 Juni 2025"
              startAndEnd="07.00 - 12.00"
              location="Kediaman Mempelai Pria Jl. Siligita No.1, Banjar, Peminge, Kabupaten Badung, Bali"
              gMap="https://maps.app.goo.gl/DcMf4eq2qtz1kgzNA"
            />
            <div className="rounded-4xl w-full min-h-[350px] relative overflow-hidden flex">
              <div
                className="w-full h-full absolute bg-cover"
                style={{
                  backgroundImage: `url(${event1})`,
                }}
              />
              <div
                className="h-full w-full absolute"
                style={{
                  background: 'rgb(73 66 54 / 78%) 0%',
                }}
              />
              <div className="relative flex flex-1 flex-col items-center px-3 py-5 z-10 font-poppins">
                <h4 className="font-poppins text-2xl font-bold text-goldy mb-2">
                  Pawiwahan
                </h4>
                <div className="[&>*:not(:last-child)]:mb-2 flex flex-1 flex-col items-center justify-evenly">
                  <span className="text-white text-lg">Rabu</span>
                  <span className="text-white text-lg">11 Juni 2025</span>
                  <div className="flex flex-row text-sm items-center">
                    <Clock className="text-white mr-2" width={16} height={16} />
                    <span className="text-white text-sm">07.00 - 12.00</span>
                  </div>
                  <span className="text-white text-center text-sm">
                    Kediaman Mempelai Pria Jl. Siligita No.1, Banjar, Peminge,
                    Kabupaten Badung, Bali
                  </span>
                  <a
                    href="https://maps.app.goo.gl/DcMf4eq2qtz1kgzNA"
                    className="flex flex-row items-center bg-white p-2 rounded-sm text-xs font-poppins"
                    target="_blank"
                  >
                    <MapPin className="mr-2" width={16} height={16} />
                    <span>Google Map</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded w-full relative overflow-hidden">
              <div className="flex flex-col items-center p-5 z-10">
                <h4 className="font-cormorant text-2xl font-bold text-goldy">
                  Pawiwahan & Resepsi Bali
                </h4>
                <span className="">Jumat</span>
                <span>24 Januari 2025</span>
                <span>16.00 - selesai</span>
                <span>
                  Kediaman Mempelai Pria Br. Metulis, Desa Dawan Kaler Kec.
                  Dawan, Kab. Klungkung, Bali
                </span>
              </div>
            </div>
            <div className="rounded w-full relative overflow-hidden">
              <div className="flex flex-col items-center p-5 z-10">
                <h4 className="font-cormorant text-2xl font-bold text-goldy">
                  Pawiwahan & Resepsi Bali
                </h4>
                <span className="">Jumat</span>
                <span>24 Januari 2025</span>
                <span>16.00 - selesai</span>
                <span>
                  Kediaman Mempelai Pria Br. Metulis, Desa Dawan Kaler Kec.
                  Dawan, Kab. Klungkung, Bali
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Page;
