import Typography from "@/myComponents/Typography";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExperienceCard from "@/myComponents/ExperienceCard";
import { useState } from "react";
import { type IExperience as ExperienceType } from "@/interfaces/Experience";
import { ExperienceService } from "@/services/experiences";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import ExperienceCardSkeleton from "@/myComponents/Skeleton/ExperinceCardSkeleton";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const { isLoading } = useQuery({
    queryKey: ["experiences"],
    queryFn: ExperienceService.getExperiences,
    select: (res) => {
      return res.data;
    },
    onSuccess: (data) => {
      if (!data) return;
      setExperiences(data);
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
      <div className="container xl:px-52">
        <div className="pt-12">
          <Typography size="normal" type="bold" variant="h2">
            👨🏻‍💻 Work Experience
          </Typography>
        </div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#222831" animate={false}>
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <ExperienceCardSkeleton key={index} />
                ))
              : experiences.map((experience, index) => {
                  return <ExperienceCard key={index} experience={experience} />;
                })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
