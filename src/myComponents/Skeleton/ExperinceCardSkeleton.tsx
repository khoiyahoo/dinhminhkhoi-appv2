import { type FC } from "react";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Wave from "@/myComponents/Wave";
import { Skeleton } from "@/components/ui/skeleton";

const ExperienceCardSkeleton: FC = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#fff",
        color: "text-text-400",
        border: "1px solid #F90",
        borderTop: "8px solid linear-gradient(92deg, #FF6B00 0%, #F90 100%)",
        boxShadow: "1px 10px 15px -10px #211e35",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #F90",
        color: "linear-gradient(92deg, #FF6B00 0%, #F90 100%)",
      }}
      iconStyle={{
        background: "linear-gradient(92deg, #FF6B00 0%, #F90 100%)",
        color: "linear-gradient(92deg, #FF6B00 0%, #F90 100%)",
      }}
      icon={
        <div className="flex justify-center items-center h-full w-full">👨🏻‍💻</div>
      }
    >
      <div className="bg-bg-100">
        <Skeleton className="h-4 w-48 bg-skeleton-100" />
        <Skeleton className="h-4 w-52 mt-2 bg-skeleton-100" />
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        <Skeleton className="h-4 w-60 bg-skeleton-100" />
        <Skeleton className="h-4 w-64 bg-skeleton-100" />
        <Skeleton className="h-4 w-56 bg-skeleton-100" />
        <Skeleton className="h-4 w-60 bg-skeleton-100" />
        <Skeleton className="h-4 w-64 bg-skeleton-100" />
      </ul>
      <Wave classNameWave="waves-card rounded-b-md" classNames="mt-8" />
    </VerticalTimelineElement>
  );
};

export default ExperienceCardSkeleton;
