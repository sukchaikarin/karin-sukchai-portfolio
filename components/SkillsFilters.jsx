"use client";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { SkillContext } from "./MySkills";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { filterskillsbtn } from "./SkillsDataBtn";

const SkillsFilters = () => {
  const [tabActive, setTabActive] = useState(1);
  const { allSkills, setFilterSkills } = useContext(SkillContext);

  const handleClickFilter = (id) => {
    setTabActive(id);
    const filteredSkills = allSkills?.filter((skills) =>
      skills.type.includes(id)
    );
    if (id === 1) {
      setFilterSkills(allSkills);
    } else {
      setFilterSkills(filteredSkills);
    }
  };

  return (
    <ToggleGroup
      className="flex flex-wrap justify-center mt-6 mb-6"
      size="sm"
      type="single"
    >
      {filterskillsbtn.map((item, index) => (
        <ToggleGroupItem
          className="bg-primary border-2 border-primary text-secondary"
          value={item.id}
          key={index}
          aria-label={item.name}
          onClick={() => handleClickFilter(item.id)}
        >
          {item.name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default SkillsFilters;
