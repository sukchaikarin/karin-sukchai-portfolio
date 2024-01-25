import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-karin.svg"
        width={54}
        height={54}
        priority
        alt="logo-karin"
      />
    </Link>
  );
};

export default Logo;
