"use client";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-karin.svg"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        priority={true}
        alt="logo-karin"
      />
    </Link>
  );
};

export default Logo;
