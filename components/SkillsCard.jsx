import Image from "next/image";
import { useContext } from "react";
import { SkillContext } from "./MySkills";
import { motion } from "framer-motion";

const SkillsCard = () => {
  const { filterSkills } = useContext(SkillContext);

  return filterSkills?.map((data) => (
    <motion.div
      key={data.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        key={data.name}
        className=" w-[180px] hover:ring-4 hover:scale-110 duration-200  hover:ring-primary  dark:ring-[#020817]  p-2 rounded-lg shadow-lg bg-white text-primary  flex flex-col items-center justify-center  dark:bg-white dark:text-secondary"
      >
        <div className="relative w-[60px] h-[60px]">
          <Image
            src={`/skill-icon/${data.img}`}
            fill
            priority
            alt={data.name}
          />
        </div>
        <div className="text-xl font-bold">{data.name}</div>
      </div>
    </motion.div>
  ));
};

export default SkillsCard;
