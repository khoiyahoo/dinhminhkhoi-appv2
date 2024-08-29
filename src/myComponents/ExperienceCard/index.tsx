import { type FC } from "react";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Typography from "@/myComponents/Typography";
import Wave from "@/myComponents/Wave";

interface Props {
  experience: {
    date: string;
    companyName: string;
    title: string;
    points: string[];
  };
}
const ExperienceCard: FC<Props> = ({ experience }) => {
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
      date={experience.date}
      iconStyle={{
        background: "linear-gradient(92deg, #FF6B00 0%, #F90 100%)",
        color: "linear-gradient(92deg, #FF6B00 0%, #F90 100%)",
      }}
      icon={
        <div className="flex justify-center items-center h-full w-full">👨🏻‍💻</div>
      }
    >
      <div className="bg-bg-100">
        <Typography
          size="normal"
          type="bold"
          variant="h3"
          className="text-text-500"
        >
          {experience.title}
        </Typography>
        <Typography
          size="small"
          type="bold"
          variant="p"
          className="text-text-500 m-0"
        >
          {experience.companyName}
        </Typography>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => {
          return (
            <li
              key={`experience-point-${index}`}
              className="text-text-500 text-[14px] pl-1 tracking-wider"
            >
              <Typography
                size="extraSmall"
                type="bold"
                variant="p"
                className="text-text-500"
              >
                {point}
              </Typography>
            </li>
          );
        })}
      </ul>
      <Wave classNameWave="waves-card rounded-b-md" classNames="mt-8" />
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
