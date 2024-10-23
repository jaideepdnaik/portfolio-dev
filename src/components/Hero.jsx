import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/Profile_Picture.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:ml-48">
            <h1 className="pb-8 text-6xl mx-6 font-thin tracking-tight lg:mt-10 lg:text-6xl">
              Jaideep D Naik
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mx-6">
              Backend Developer
            </span>
            <p className="text-justify py-6 max-w-xl font-light tracking-tighter mx-6">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center lg:mr-32 lg:mb-10">
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
