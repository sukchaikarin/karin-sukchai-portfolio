"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/karin-sukchai/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/sukchaikarin",
    name: <RiGithubFill />,
  },

  {
    path: "https://www.facebook.com/DevInvestorKarin",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://www.instagram.com/karin_kan22/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link target="_blank" href={icon.path} key={index}>
            <div className={`${iconsStyles}`} aria-label={`${icon.name} link`}>
              {icon.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
