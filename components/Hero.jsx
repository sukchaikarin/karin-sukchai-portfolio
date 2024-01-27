import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { RiArrowDownSLine } from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-16  xl:py-16  xl:pt-16  ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/*text */}
          <div className="md:flex flex-row-reverse gap-x-12  ">
            {/* Socials */}

            <div className="flex max-w-[650px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]">
                Software Developer
              </div>
              <h1 className="h1 mb-4">Hi, my name is Karin Sukchai</h1>
              <p className="subtitle max-w-[600px] mx-auto xl:mx-0 ">
                Experienced web developer with expertise in creating a
                university event registration system. Strong technical skills,
                teamwork, and a positive and patient approach. Seeking a full
                stack software developer role to contribute effectively to team
                projects and drive software innovation.
              </p>
              {/* buttons */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-10 mx-auto xl:mx-0 mb-12">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className=" border-2 border-primary gap-x-2 shadow-lg bg-transparent"
                  >
                    Contact me <Send size={18} />
                  </Button>
                </Link>
                <Button className="gap-x-2  shadow-lg ">
                  Download CV <Download size={18} />
                </Button>
              </div>
            </div>
            <Socials
              containerStyles="hidden xl:flex flex-col gap-y-9 mt-10 "
              iconsStyles="text-foreground text-[30px] hover:text-[#474554] transition-all hover:text-[35px]"
            />
          </div>

          {/*image */}
          <div className="hidden md:flex  xl:flex  ">
            <DevImg
              containerStyles="w-[320px] h-[320px] relative xl:w-[450px] h-[450px]   relative"
              imgSrc="/software-dev-img.png"
            />
          </div>
        </div>
        {/*icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-16 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
