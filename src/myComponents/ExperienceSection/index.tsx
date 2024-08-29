import Typography from "@/myComponents/Typography";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExperienceCard from "@/myComponents/ExperienceCard";
import { useState } from "react";
import { type IExperience as ExperienceType } from "@/interfaces/Experience";
import { ExperienceService } from "@/services/experiences";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

const ExperienceSection = () => {
  const [data, setData] = useState<ExperienceType[]>([]);
  useQuery({
    queryKey: ["experiences"],
    queryFn: ExperienceService.getExperiences,
    select: (res) => {
      return res.data;
    },
    onSuccess: (data) => {
      if (!data) return;
      setData(data);
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Some thing went wrong",
      });
    },
  });

  return (
    <section className="pb-12">
      <div className="container">
        <div className="pt-12">
          <Typography size="normal" type="bold" variant="h2">
            👨🏻‍💻 Work Experience
          </Typography>
        </div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#222831">
            {data.map((experience, index) => {
              return <ExperienceCard key={index} experience={experience} />;
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
