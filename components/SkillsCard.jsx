import Image from "next/image";
import { dataskill } from "./DataSkills";
const SkillsCard = () => {
  return dataskill.map((data) => (
    <div className="w-[240px] hover:ring-4  hover:ring-primary  dark:ring-[#020817]  p-2 rounded-lg shadow-lg bg-white text-primary  flex flex-col items-center justify-center  dark:bg-white dark:text-secondary">
      <div className="relative w-[100px] h-[100px]">
        <Image src={`/skill-icon/${data.img}`} fill priority alt={data.name} />
      </div>
      <div className="text-xl font-bold">{data.name}</div>
    </div>
  ));
};

export default SkillsCard;
