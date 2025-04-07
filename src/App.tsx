import Countdown from './components/Countdown';
import heroImage from './assets/preweds/hero-image.png';
import bgImage2 from './assets/preweds/bg-image-2.jpg';
import logo from './assets/logo.png';

const target = 'Wed Jun 11 2025 00:00:00 GMT+0800';

const Page = () => {
  return (
    <>
      <section className="relative min-h-screen w-full bg-testpink bg-yellow-beach">
        <div className="mx-auto w-full max-w-[430px] min-h-screen bg-primary relative overflow-hidden">
          <div className="w-full h-full bg-red-50 relative">
            <div
              className="h-screen w-full bg-cover bg-[center_bottom_0px] absolute"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundPositionY: '-150px',
              }}
            ></div>
            {/* <div className="h-screen w-full absolute top-0 left-0 z-10 bg-black opacity-30"></div> */}
            <div
              className="h-screen w-full max-w-[430px] mx-auto relative z-20"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgba(255, 241, 213, 1) 80%)',
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center flex">
                <div className="h-2/3 w-3/4 rounded-full border-yellow-beach border-double border-[5px]" />
              </div>
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
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen md:min-h-[60vh] bg-yellow-beach relative">
        <div className="mx-auto w-full max-w-[430px] min-h-screen relative overflow-hidden">
          <div
            className="h-screen w-full bg-cover bg-[center_bottom_0px] absolute"
            style={{
              backgroundImage: `url(${bgImage2})`,
            }}
          ></div>
          <div
            className="h-screen w-full max-w-[430px] mx-auto absolute"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255, 241, 213, 0.5) 0%)',
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
                Wahai pasangan suami-istri, semoga kalian tetap bersatu dan
                tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh
                kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama
                seluruh keturunanmu.
              </p>
            </div>
            <div>
              <p className="text-center font-cormorant text-4xl italic">
                Countdown
              </p>
              <Countdown startValue={target} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
