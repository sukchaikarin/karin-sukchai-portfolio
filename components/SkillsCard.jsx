import Image from "next/image";
import { dataskill } from "./DataSkills";
const SkillsCard = () => {
  return dataskill.map((data) => (
    <div className="w-[240px]  p-2 rounded-lg shadow-lg bg-white text-primary  flex flex-col items-center justify-center  dark:bg-white dark:text-secondary">
      <div className="relative w-[100px] h-[100px]">
        <Image src={`/skill-icon/${data.img}`} fill priority alt={data.name} />
      </div>
      <div className="text-xl font-bold">{data.name}</div>
    </div>
  ));

  //   return (

  //     <div className="w-[240px]  p-2 rounded-lg shadow-lg  bg-primary flex flex-col text-secondary items-center justify-center   ">
  //       <div className="relative w-[120px] h-[120px] ">
  //         <Image
  //           src="/skill-icon/react.svg"
  //           fill
  //           priority
  //           alt="Software-Developer-Image"
  //         />
  //       </div>
  //       <div className="text-xl font-bold">React</div>
  //     </div>
  //   );
};

export default SkillsCard;
