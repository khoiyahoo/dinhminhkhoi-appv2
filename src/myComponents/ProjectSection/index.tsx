import { useMemo, useState, type FC } from "react";
import Typography from "@/myComponents/Typography";
import ProjectCard from "@/myComponents/ProjectCard";
import { type IProjects } from "@/interfaces/Projects";
import { ProjectsService } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

interface Props {
  isRecent?: boolean;
}

const ProjectSection: FC<Props> = ({ isRecent = false }) => {
  const [projects, setProjects] = useState<IProjects[]>([]);

  useQuery({
    queryKey: ["projects"],
    queryFn: ProjectsService.getProjects,
    select: (res) => {
      return res.data;
    },
    onSuccess: (data) => {
      if (!data) return;
      setProjects(data);
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    },
  });

  const displayedProjects = useMemo(() => {
    const reversedProjects = [...projects].reverse();
    return isRecent ? reversedProjects.slice(0, 4) : reversedProjects;
  }, [projects, isRecent]);

  return (
    <section className="pt-12">
      <div className="container xl:px-52">
        <Typography size="normal" type="bold" variant="h4" className="text-2xl">
          📂 {isRecent ? "Recent projects" : "Projects"}
        </Typography>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {displayedProjects.map((item, index) => (
            <ProjectCard
              key={index}
              openSource={item.openSource}
              href={item.link}
              icon={item.icon}
              src={item.src}
              title={item.name}
              description={item.description}
              tags={item.techs}
              responsibility={item.responsibility}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
