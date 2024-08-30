import { type FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectCardSkeleton: FC = () => {
  return (
    <div className="max-w-full group cursor-pointer h-full">
      <div className="w-full h-full bg-primary p-[1px] pl-[3px] rounded-[1.25rem] shadow-discovery-card-orange-100 ease-in-out duration-100 hover:bg-conversion-01 hover:-translate-y-1">
        <div className="bg-text-100 h-full rounded-[1.25rem] py-3 px-4 flex flex-col gap-4">
          <div className="flex gap-1 items-center justify-between">
            <div className="flex gap-1 items-center">
              <Skeleton className="h-6 w-6 bg-skeleton-100" />
              <Skeleton className="h-6 w-16 bg-skeleton-100" />
            </div>
            <Skeleton className="h-6 w-6 bg-skeleton-100" />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-4 w-72 bg-skeleton-100" />
            <Skeleton className="h-4 w-64 bg-skeleton-100" />
            <Skeleton className="h-4 w-80 bg-skeleton-100" />
            <Skeleton className="h-4 w-96 bg-skeleton-100" />
            <Skeleton className="h-4 w-72 bg-skeleton-100" />

            <Skeleton className="h-4 w-72 bg-skeleton-100" />
            <Skeleton className="h-4 w-64 bg-skeleton-100" />
            <Skeleton className="h-4 w-80 bg-skeleton-100" />
            <Skeleton className="h-4 w-96 bg-skeleton-100" />
            <Skeleton className="h-4 w-72 bg-skeleton-100" />
          </div>

          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton className="h-8 w-8 bg-skeleton-100" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
