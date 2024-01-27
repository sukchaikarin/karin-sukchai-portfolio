"use client";
import React from "react";
import Link from "next/link";
import { Card } from "flowbite-react";
import { Button } from "./ui/button";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";
import { Download, Send } from "lucide-react";
const ProjectCard = () => {
  return (
    <Card className=" max-w-sm flex flex-col justify-center items-center mx-auto   hover:scale-105 duration-200">
      <div className="w-full h-[200px] lg:w-full lg:h-[200px] overflow-hidden rounded-lg hover:cursor-pointer">
        <img
          src="/colmar-project.png"
          alt=""
          className="w-full hover:translate-y-[-70%] delay-150 duration-1000 ease-in-out "
        />
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        ColmarAcademy
      </h3>
      <h4>Stack : HTML,CSS</h4>
      <h4>Responsive : Desktop , Mobile</h4>

      <div className="flex flex-col justify-between gap-y-3 md:flex-row gap-x-10 mx-auto xl:mx-0 ">
        <Button size="sm" className="gap-x-2  shadow-lg ">
          Github <RiGithubFill />
        </Button>
        <Link href="/contact">
          <Button
            variant="secondary"
            size="sm"
            className=" border-2 border-primary gap-x-2 shadow-lg bg-transparent"
          >
            Link <RiExternalLinkLine />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
