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
import Separator from './components/Separator';

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
            <Separator>
              <p className="text-center font-cormorant text-xl mx-2">
                Countdown to:
              </p>
            </Separator>
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
          <h3 className="font-cormorant text-4xl text-center my-2">Mempelai</h3>
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
        <div className="relative p-4 w-full min-h-screen flex items-center flex-col justify-evenly">
          <img
            src={cloudImage}
            alt="cloud"
            width={1024}
            height={1024}
            className="w-[150px] h-[150px] absolute top-[10px] right-[-60px]"
          />
          <img
            src={cloudImage}
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
              bgImage={event1}
              dayName="Rabu"
              date="11 Juni 2025"
              startAndEnd="07.00 - 12.00 WITA"
              location="Kediaman Mempelai Pria Jl. Siligita No.1, Banjar, Peminge, Kabupaten Badung, Bali"
              gMap="https://maps.app.goo.gl/DcMf4eq2qtz1kgzNA"
            />
            <EventCard
              title="Resepsi"
              bgImage={event1}
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
              bgImage={event1}
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
    </>
  );
};

export default Page;
