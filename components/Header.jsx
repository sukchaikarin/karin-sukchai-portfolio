"use client";
import React, { useState, useEffect } from "react";
//components
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    //!remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return (
    <header className="bg-secondary py-4 sticky top-0 z-30 transition-all">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-6 items-center">
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
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/*MobileNav */}
            <div className="xl:hidden ">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
