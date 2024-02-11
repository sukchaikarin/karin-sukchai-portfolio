"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { RiArrowDownSLine } from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Socials from "./Socials";

const herodetail = {
  name: `Experienced web developer with expertise in creating a
  university event registration system. Strong technical skills,
  teamwork, and a positive and patient approach. Seeking a full
  stack software developer role to contribute effectively to team
  projects and drive software innovation.`,
};

const Hero = () => {
  return (
    <section id="home" className="py-16 relative   xl:py-24  ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/*text */}
          <div className="md:flex flex-row-reverse gap-x-20  ">
            <div className="flex max-w-[650px] flex-col gap-y-4 justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]">
                Software Developer
              </div>
              <h1 className="font-bold text-5xl lg:text-7xl mb-4">
                Hi, my name is Karin Sukchai
              </h1>
              <p className="subtitle w-auto mx-auto xl:mx-0 ">
                {herodetail.name}
              </p>
              {/* buttons */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-10 mx-auto xl:mx-0 mb-12">
                <Link href="#contact">
                  <Button
                    variant="secondary"
                    className=" border-2 border-primary gap-x-2 shadow-lg bg-transparent"
                  >
                    Contact me <Send size={18} />
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1QXJ0fp3G7N64Za_B7QTY00svtGBhTutg/view?usp=drive_link"
                >
                  <Button className="gap-x-2  shadow-lg ">
                    Download CV <Download size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="hidden xl:flex flex-col gap-y-10 mt-14 "
              iconsStyles="text-foreground text-[30px] hover:text-[#474554] transition-all hover:text-[35px]"
            />
          </div>

          {/*image */}
          <div className="hidden justify-center  items-center  md:flex   xl:flex  ">
            <DevImg
              containerStyles="w-[350px] h-auto relative xl:w-[450px] xl:h-auto   "
              imgSrc="/karin-cartoon.webp"
            />
          </div>
        </div>
        {/*icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-16 xl:bottom-8 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
