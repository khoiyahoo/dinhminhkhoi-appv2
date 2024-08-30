import { type FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TechCardSkeleton: FC = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-conversion-01 p-[1px] rounded-[20px] shadow-discovery-card-yellow-500">
        <div className="flex items-center justify-center my-2">
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="bg-bg-100 rounded-[20px] py-3 px-4 flex flex-wrap gap-2 max-md:justify-center">
          {Array.from({ length: 15 }).map((_, index) => (
            <Skeleton className="h-4 w-16" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCardSkeleton;
