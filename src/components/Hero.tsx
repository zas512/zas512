import { Spotlight } from "./ui/SpotLight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="ble" />
      </div>
      {/* <div className="h-screen w-full bg-black-100 bg-grid-white/[0.3] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex justify-center">
          <div className="max-w-[89vw]">
            <p className="text-white">Dynamic webmagic with NextJs</p>
          </div>
        </div>
      </div> */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
