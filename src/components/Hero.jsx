import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/Profile_Picture.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:ml-48">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl mx-6 font-thin tracking-tight lg:mt-10 lg:text-6xl"
            >
              Jaideep D Naik
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mx-6"
            >
              Backend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-justify py-6 max-w-xl font-light tracking-tighter mx-6"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center lg:mr-32 lg:mb-10">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
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
