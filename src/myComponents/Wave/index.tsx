import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState, type FC } from "react";
interface Props {
  classNames?: string;
  classNameWave?: string;
}

const Wave: FC<Props> = ({ classNames = "", classNameWave = "waves" }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("hero-area", classNames)}>
      <svg
        className={classNameWave}
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
            fill={
              resolvedTheme === "dark"
                ? "rgba(255,255,255,0.7)"
                : "rgba(0,0,0,0.1)"
            }
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill={
              resolvedTheme === "dark"
                ? "rgba(255,255,255,0.5)"
                : "rgba(0,0,0,0.1)"
            }
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill={
              resolvedTheme === "dark"
                ? "rgba(255,255,255,0.3)"
                : "rgba(0,0,0,0.1)"
            }
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill={resolvedTheme === "dark" ? "#dedede" : "#878787"}
          />
        </g>
      </svg>
    </div>
  );
};

export default Wave;
