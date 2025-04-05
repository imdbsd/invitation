import ImageSlideshow from './ImageSlideshow';
import heroImage from './assets/preweds/hero-image.png';
import heroImageBig from './assets/preweds/hero-image-big.jpg';

// max-w-[430px] // max width

const Page = () => {
  return (
    <>
      <section className="relative min-h-screen w-full bg-testpink bg-[#FFF1D5]">
        <div className="mx-auto w-full max-w-[430px] min-h-screen bg-primary relative overflow-hidden">
          <div className="w-full h-full bg-red-50 relative">
            {/* <ImageSlideshow /> */}
            <div
              className="h-screen w-full bg-cover bg-[center_bottom_0px] absolute"
              style={{
                backgroundImage: `url(${heroImageBig})`,
                backgroundPositionY: '-150px',
              }}
            ></div>
            <div
              className="h-screen w-full absolute top-0 left-0 z-10 bg-black opacity-30"
              //  style={{
              //   background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 1%, rgba(0, 0, 0, 0.30) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 70.16%)`
              // }}
            ></div>
            <div
              className="h-screen w-full max-w-[430px] mx-auto relative z-20"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgba(255, 241, 213, 1) 80%)',
              }}
            >
              <div className='absolute top-0 bottom-0 left-0 right-0 items-center justify-center flex'>
                <div className='h-2/3 w-3/4 rounded-full border-[#FFF1D5] border-double border-[5px]' />
              </div>
              <div className="absolute bottom-[75px] right-0 left-0 flex flex-col justify-center items-center z-10">
                <h1 className="flex flex-col items-center text-[#4B3B2A] text-sm tracking-[2px] font-normal">
                  <span>THE WEDDING OF</span>
                </h1>
                <p className="block text-4xl text-[#4B3B2A] pt-cormorant">
                  Apri & Surya
                </p>
                <p className="text-[#4B3B2A] text-center text-sm tracking-[2px] font-normal">
                  <span className="block">Kepada Yth.</span>
                  <span className="block">Bapak/ Ibu/ Saudara/ i</span>
                </p>
                <p className="pt-cormorant text-sm font-normal bg-white p-3 rounded-sm mt-4">Justin Bieber</p>{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full max-w-[430px] border-double border-[2px] mx-auto">
          <span className=".pt-cormorant">
            Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair
            naptrbhih, modamanau sve grhe.
          </span>
          <span>(Rg Veda X.85.42)</span>
          <span>
            Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
            pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan,
            tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.
          </span>
        </div>
      </section>
    </>
  );
};

export default Page;
