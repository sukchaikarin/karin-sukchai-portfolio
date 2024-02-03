import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        alt="Software-Developer-Image"
        width={350}
        height={350}
        priority
      />
    </div>
  );
};

export default DevImg;
