import { type FC } from "react";
import BadgeCard from "@/myComponents/BadgeCard";
import Typography from "@/myComponents/Typography";
import { type Tech } from "@/interfaces/Skills";

interface Props {
  title: string;
  itemCards: Tech[];
}
const TechCard: FC<Props> = ({ title, itemCards }) => {
  return (
    <div className="w-full">
      <div className="w-full bg-conversion-01 p-[1px] rounded-[20px] shadow-discovery-card-yellow-500">
        <Typography
          size="normal"
          type="bold"
          variant="p"
          className="text-text-100 text-center"
        >
          {title}
        </Typography>
        <div className="bg-bg-100 rounded-[20px] py-3 px-4 flex flex-wrap gap-2">
          {itemCards?.map((item, index) => (
            <BadgeCard key={index} title={item.title} logo={item.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCard;
