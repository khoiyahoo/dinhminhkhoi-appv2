import { useState, type FC } from "react";
import Typography from "@/myComponents/Typography";
import TechCard from "@/myComponents/TechCard";
import { useQuery } from "@tanstack/react-query";
import { SkillsService } from "@/services/skills";
import { type ISkill } from "@/interfaces/Skills";
import { toast } from "@/components/ui/use-toast";
import TechCardSkeleton from "@/myComponents/Skeleton/TeckCardSkeleton";

const TechStackSection: FC = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const { isLoading } = useQuery({
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
      toast({
        variant: "destructive",
        title: "Some thing went wrong",
      });
    },
  });

  return (
    <section className="pt-12">
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
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <TechCardSkeleton key={index} />
                ))
              : skills.map((item, index) => (
                  <TechCard
                    title={item.name}
                    itemCards={item.techs}
                    key={index}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechStackSection;
