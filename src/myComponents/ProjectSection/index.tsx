import { useMemo, useState, type FC } from "react";
import Typography from "@/myComponents/Typography";
import { type IProjects } from "@/interfaces/Projects";
import { ProjectsService } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import ProjectCardSkeleton from "@/myComponents/Skeleton/ProjectSekeleton";
import Link from "next/link";
import ProjectCard from "@/myComponents/ProjectCard";
interface Props {
  isRecent?: boolean;
}

const ProjectSection: FC<Props> = ({ isRecent = false }) => {
  const [projects, setProjects] = useState<IProjects[]>([]);

  const { isLoading } = useQuery({
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
        <div className="flex items-end gap-2">
          <Typography
            size="normal"
            type="bold"
            variant="h4"
            className="text-2xl"
          >
            📂 {isRecent ? "Recent projects" : "Projects"}
          </Typography>
          {isRecent && (
            <Link href="/projects">
              <Typography
                size="normal"
                type="bold"
                variant="p"
                className="text-md"
              >
                ...more
              </Typography>
            </Link>
          )}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {isLoading
            ? Array.from({ length: isRecent ? 4 : 8 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            : displayedProjects.map((item, index) => (
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
                  colorOverlay={item.colorOverlay}
                  colorCircle={item.colorCircle}
                  imagePreview={item.imagePreview}
                  live={item.live}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
