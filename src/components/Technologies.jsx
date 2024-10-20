import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { SiSocketdotio } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-4xl text-cyan-400"></RiReactjsLine>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-4xl text-green-400"></SiMongodb>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiRedis className="text-4xl text-red-400"></DiRedis>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-4xl text-green-400"></FaNodeJs>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-4xl text-blue-400"></BiLogoPostgresql>
        </div>  
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiDotnet className="text-4xl text-white-400"></DiDotnet>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-4xl text-white-400"></SiExpress>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiDocker className="text-4xl text-blue-400"></DiDocker>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsGithub className="text-4xl text-white-400"></BsGithub>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSocketdotio className="text-4xl text-blue-400"></SiSocketdotio>
        </div>  
      </div>
    </div>
  );
};

export default Technologies;
