import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"></AlignJustify>
      </SheetTrigger>
      <SheetContent>
        <div className=" flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <div className="flex gap-x-4 items-center">
              <Logo />
              <div className="flex flex-col gap-y-1 ">
                <p className="font-bold text-[8px] 	uppercase tracking-wider">
                  software developer
                </p>
                <div className="h-[2px] w-100 bg-slate-800"></div>
                <p className="font-bold text-[8px]	uppercase tracking-wider">
                  Karin Sukchai
                </p>
              </div>
            </div>
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <Socials
            containerStyles="flex flex-col gap-x-4"
            iconsStyles="text-2xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
