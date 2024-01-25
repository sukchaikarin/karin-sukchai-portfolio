"use client";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex">
            {/* Nav */}
            <Nav />
            <ThemeToggler />
            {/*MobileNav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
