import { type FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TravelCardSkeleton: FC = () => {
  return (
    <div className="w-full group hover:-translate-y-1 duration-200 ease-in-out">
      <div className="w-full h-full p-4 rounded-[20px] shadow-discovery-card-orange-100 flex flex-col gap-2">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20 bg-skeleton-100" />
          <Skeleton className="h-4 w-20 bg-skeleton-100" />
        </div>
        <ul className="list-disc ml-5 space-y-2 flex-1">
          <Skeleton className="h-4 w-60 bg-skeleton-100" />
          <Skeleton className="h-4 w-64 bg-skeleton-100" />
          <Skeleton className="h-4 w-56 bg-skeleton-100" />
          <Skeleton className="h-4 w-60 bg-skeleton-100" />
          <Skeleton className="h-4 w-64 bg-skeleton-100" />
        </ul>
        <div className="w-full group-hover:underline group-hover:underline-offset-4 group-hover:italic ease-in-out">
          <Skeleton className="h-4 w-20 bg-skeleton-100" />
        </div>
      </div>
    </div>
  );
};

export default TravelCardSkeleton;
