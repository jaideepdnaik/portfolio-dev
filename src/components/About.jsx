import aboutImage from "../assets/About_Picture.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <h2 className="my-20 text-center text-4xl mb-8">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={aboutImage}
              alt="About Picture"
              className="w-[290px] h-[350px] lg:ml-60 rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 mx-6 font-light text-justify max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
