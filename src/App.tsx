import ImageSlideshow from './ImageSlideshow';
import heroImage from './assets/preweds/hero-image.png';
import heroImageBig from './assets/preweds/hero-image-big.jpg';

// max-w-[430px] // max width

const Page = () => {
  return (
    <>
      <section className="relative min-h-screen w-full bg-[#FFF1D5]">
        <div className="mx-auto w-full max-w-[430px] min-h-screen bg-primary relative overflow-hidden border-x border-gray-200">
          <div className="w-full h-full bg-red-50 relative">
            {/* <ImageSlideshow /> */}
            <div
              className="h-screen w-full bg-cover bg-[center_bottom_0px] absolute"
              style={{backgroundImage: `url(${heroImageBig})`, backgroundPositionY: '-150px'}}
            ></div>
            <div
              className="h-screen w-full absolute top-0 left-0 z-10 bg-black opacity-30"
              //  style={{
              //   background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 1%, rgba(0, 0, 0, 0.30) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 70.16%)`
              // }}
            ></div>
            <div className="flex justify-center flex-col items-center h-screen w-full max-w-[430px] mx-auto relative z-20" style={{
              background: 'linear-gradient(to bottom, rgba(255, 241, 213, 0) 0%, rgba(255, 241, 213, 0.3) 70%, rgba(255, 241, 213, 1) 80%)'
            }}>
              <h1 className="flex flex-col items-center text-white .pt-serif-regular">
                <span className="block text-2xl">The Wedding of</span>
                <span className="block text-xl">Apri & Surya</span>
              </h1>
              <p className="text-lg text-white text-center">
                <span className="block">Kepada Yth.</span>
                <span className="block">Bapak/ Ibu/ Saudara/ i</span>
              </p>
              <p className="pt-serif-regular-italic">John Doe</p>{' '}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full max-w-[430px] border-double border-[2px] mx-auto">
          <span className='font-'>
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
