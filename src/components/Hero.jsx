import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/Profile_Picture.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 mx-4 text-6xl font-thin tracking-tight lg:text-5-xl">
              Jaideep D Naik
            </h1>
            <span className="mx-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
              Backend Developer
            </span>
            <p className="my-2 mb-6 mx-4 text-justify text-sm py-2 max-w-xl font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-10">
          <div className="flex justify-center">
            <img
              src={profilePicture}
              alt="Jaideep D Naik"
              className="w-[290px] h-[350px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
