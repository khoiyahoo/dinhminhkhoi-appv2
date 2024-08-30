import { useState, type FC } from "react";
import Typography from "@/myComponents/Typography";
import TravelCard from "@/myComponents/TravelCard";
import { type ITravel } from "@/interfaces/Travel";
import { TravelService } from "@/services/travel";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import TravelCardSkeleton from "@/myComponents/Skeleton/TravelCardSkeleton";

const TravelSection: FC = () => {
  const [travel, setTravel] = useState<ITravel[]>([]);
  const { isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: TravelService.getTravel,
    select: (res) => {
      return res.data;
    },
    onSuccess: (data) => {
      if (!data) return;
      setTravel(data);
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
        <div>
          <Typography
            size="normal"
            type="bold"
            variant="h4"
            className="text-2xl"
          >
            🚌 Travel
          </Typography>
          <Typography
            size="normal"
            type="bold"
            variant="p"
            className="mt-4 text-justify"
          >
            🔥 I am a person who loves to travel, like to explore beautiful
            places, like to watch the sunset. Luckily, I meet friends who share
            the same passion for travel. The trips were the youth of the
            brothers in rooms 1 and 2521
          </Typography>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 auto-cols-fr">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <TravelCardSkeleton key={index} />
              ))
            : travel.map((item) => (
                <TravelCard
                  title={item.title}
                  icon={item.icon}
                  date={item.date}
                  link={item.link}
                  points={item.points}
                  key={item.id}
                />
              ))}
        </div>
      </div>
    </section>
  );
};
export default TravelSection;
