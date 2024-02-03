import Link from "next/link";
import React from "react";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiPhoneFill,
} from "react-icons/ri";

const iconStyle = { width: "45px", height: "45px" };
const itemsOfContact = [
  {
    id: 1,
    name: "phone",
    element: "083-463-2917",
    path: "tel:+66834632917",
    name: <RiPhoneFill style={iconStyle} />,
  },
  {
    id: 2,
    name: "linkedin",
    element: "karin-sukchai",
    path: "https://www.linkedin.com/in/karin-sukchai/",
    name: <RiLinkedinFill style={iconStyle} />,
  },
  {
    id: 3,
    name: "github",
    element: "sukchaikarin",
    path: "https://github.com/sukchaikarin",
    name: <RiGithubFill style={iconStyle} />,
  },
  {
    id: 4,
    name: "facebook",
    element: "DevInvestorKarin",
    path: "https://www.facebook.com/DevInvestorKarin",
    name: <RiFacebookBoxFill style={iconStyle} />,
  },
  {
    id: 5,
    name: "instagram",
    element: "karin_kan22",
    path: "https://www.instagram.com/karin_kan22/",
    name: <RiInstagramFill style={iconStyle} />,
  },
];

const ContactItem = () => {
  return (
    <div className="flex flex-col gap-4">
      {itemsOfContact.map((icon, index) => {
        return (
          <Link target="_blank" href={icon.path} key={index}>
            <div className="flex gap-10">
              <div aria-label={`${icon.name}-link`}>{icon.name}</div>
              <span className="text-3xl tracking-wider">{icon.element}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ContactItem;
