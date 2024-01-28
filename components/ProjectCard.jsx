"use client";
import React from "react";
import Link from "next/link";
import { Card } from "flowbite-react";
import { Button } from "./ui/button";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";
const ProjectCard = () => {
  return (
    <div className="bg-white dark:text-secondary p-4 hover:border-2 hover:border-zinc-700 rounded-lg shadow-lg max-w-sm flex flex-col justify-center items-center mx-auto   hover:scale-105 duration-200">
      <div className="w-full h-[250px] lg:w-full  overflow-hidden rounded-lg hover:cursor-pointer">
        <img
          src="/colmar-project.webp"
          alt="colmar-project"
          className="w-full hover:translate-y-[-60%] delay-150 duration-1000 ease-in-out "
          loading="lazy"
        />
      </div>
      <div className=" mt-4 gap-4 w-full flex flex-col justify-start">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900  dark:text-secondary">
          ColmarAcademy
        </h3>
        <h4>Stack : HTML,CSS</h4>
        <h4>Responsive : Desktop , Mobile</h4>

        <div className="flex flex-col justify-between gap-y-3 md:flex-row gap-x-10 mx-auto xl:mx-0 ">
          <Link href="/contact">
            <Button
              variant="secondary"
              size="sm"
              className=" border-2 border-[#020817] gap-x-2 shadow-lg bg-transparent  dark:text-[#020817] hover:text-[#020817]"
            >
              Link <RiExternalLinkLine />
            </Button>
          </Link>
          <Button
            size="sm"
            className="gap-x-2 bg-[#020817] text-white hover:bg-transparent hover:text-[#020817] hover:border-2 hover:border-[#020817]  shadow-lg "
          >
            Github <RiGithubFill />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
