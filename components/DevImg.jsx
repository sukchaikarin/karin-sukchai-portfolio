import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        fill={true}
        priority={true}
        alt="Software-Developer-Image"
        sizes="(max-width: 450px) 100vw,(max-width: 320px) 80vw"
      />
    </div>
  );
};

export default DevImg;
