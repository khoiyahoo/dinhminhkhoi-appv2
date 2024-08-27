import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { type FC } from "react";

interface Props {
  classNames?: string;
}

const Wave: FC<Props> = ({ classNames = "" }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className={cn("hero-area", classNames)}>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill={isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.1)"}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill={isDarkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.1)"}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)"}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill={isDarkMode ? "#dedede" : "#878787"}
          />
        </g>
      </svg>
    </div>
  );
};

export default Wave;
