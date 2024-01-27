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
            <div className="flex gap-2 items-center">
              <Logo />
              <div className="flex flex-col ">
                <p className="font-bold 	uppercase tracking-wider">
                  software developer
                </p>
                <p className="font-bold 	uppercase tracking-wider">
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
