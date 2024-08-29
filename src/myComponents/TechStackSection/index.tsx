import { useState, type FC } from "react";
import Typography from "@/myComponents/Typography";
import TechCard from "@/myComponents/TechCard";
import { useQuery } from "@tanstack/react-query";
import { SkillsService } from "@/services/skills";
import { type ISkill } from "@/interfaces/Skills";

const TechStackSection: FC = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  useQuery({
    queryKey: ["skills"],
    queryFn: SkillsService.getSkills,
    select: (res) => {
      return res.data;
    },
    onSuccess: (data) => {
      if (!data) return;
      setSkills(data);
    },
    onError: () => {
      console.log("Errr");
    },
  });

  return (
    <section className="rounded-t-3xl xl:rounded-t-[8.5rem] pt-12">
      <div className="container xl:px-52">
        <Typography size="normal" type="bold" variant="p">
          Introduction
        </Typography>
        <Typography
          size="normal"
          type="bold"
          variant="h4"
          className="text-2xl "
        >
          📚 TechStack
        </Typography>
        <div className="w-full flex flex-col items-start gap-4 mt-4">
          <div className="w-full flex flex-col">
            <Typography
              size="normal"
              type="bold"
              variant="p"
              className="text-justify"
            >
              💻 Technologies that I can used for business.
            </Typography>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            {skills.map((item, index) => (
              <TechCard title={item.name} itemCards={item.techs} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechStackSection;
