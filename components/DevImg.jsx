import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        alt="Software-Developer-Image"
        loading="lazy"
        width="350"
        height="350"
      />
    </div>
  );
};

export default DevImg;
