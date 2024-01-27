"use client";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
const SkillsFilters = () => {
  const filterskills = ["All", "Languages", "Frameworks", "Databases", "Tools"];

  return (
    <ToggleGroup
      className="flex flex-wrap justify-center mt-6 mb-6"
      size="sm"
      type="single"
    >
      {filterskills.map((item, index) => (
        <ToggleGroupItem
          className="bg-primary border-2 border-primary text-secondary"
          value={index + 1}
          key={index}
          aria-label={item}
        >
          {item}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default SkillsFilters;
