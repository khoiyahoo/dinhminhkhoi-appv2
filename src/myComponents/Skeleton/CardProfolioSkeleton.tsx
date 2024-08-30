import { type FC } from "react";
import { cn } from "@/lib/utils";
import { PRIMARY_TECH } from "@/constants/dummy";
import { Skeleton } from "@/components/ui/skeleton";
interface Props {
  className?: string;
}

const CardPortfolioSkeleton: FC<Props> = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "bg-white bg-cover lg:w-[21.875rem] w-full h-[25.2rem] rounded-2xl shadow-discovery-card-orange-100 cursor-pointer group",
        className
      )}
    >
      <div className="flex flex-col justify-center items-center w-full h-full pt-[7rem] px-10 pb-10">
        <div className="w-[6.25rem] h-[6.25rem] bg-gray-200 rounded-full shadow-discovery-icon-orange-100 transform transition-transform duration-300 group-hover:-translate-y-2">
          <Skeleton className="h-[6.25rem] w-[6.25rem] bg-skeleton-100 rounded-full" />
        </div>
        <div className="flex flex-col justify-start items-center gap-2 w-full h-full mt-4">
          <Skeleton className="h-4 w-20 bg-skeleton-100" />
          <Skeleton className="h-4 w-20 bg-skeleton-100" />
          <Skeleton className="h-4 w-20 bg-skeleton-100" />
          <div className="flex flex-wrap mt-2 gap-2 w-full justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
            {PRIMARY_TECH.map((item, index) => (
              <Skeleton className="h-4 w-16 bg-skeleton-100" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolioSkeleton;
