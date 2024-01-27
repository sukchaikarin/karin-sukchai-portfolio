"use client";

import {
  RiSlackFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiSlackFill />,
  },
  {
    path: "/",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
