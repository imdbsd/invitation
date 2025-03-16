import ImageSlideshow from './ImageSlideshow';
import heroImage from './assets/preweds/hero-image.png';
import heroImageBig from './assets/preweds/hero-image-big.jpg';

// max-w-[430px] // max width

const Page = () => {
  return (
    <>
      <div className="relative min-h-screen w-full bg-gray-100/40">
        <div className="mx-auto w-full min-h-screen bg-primary relative overflow-hidden border-x border-gray-200">
          <section className="w-full h-full bg-red-50 relative">
            {/* <ImageSlideshow /> */}
            <div
              className="h-screen w-full bg-cover bg-[center_bottom_0px]"
              style={{backgroundImage: `url(${heroImageBig})`}}
            ></div>
            <div
              className="h-screen w-full absolute top-0 left-0 z-10 bg-black opacity-30"
              //  style={{
              //   background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 1%, rgba(0, 0, 0, 0.30) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 70.16%)`
              // }}
            ></div>
            <div className="flex justify-center flex-col items-center h-screen w-full max-w-[430px] mx-auto relative z-20">
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
          </section>
        </div>
      </div>
      <div className="w-full">
        <section className="w-full max-w-[430px] border-double border-[2px] mx-auto">
          <span>
            Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair
            naptrbhih, modamanau sve grhe.
          </span>
          <span>(Rg Veda X.85.42)</span>
          <span>
            Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
            pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan,
            tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.
          </span>
        </section>
      </div>
    </>
  );
};

export default Page;
