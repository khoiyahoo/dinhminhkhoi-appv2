import { type FC } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkIcon from "@/assets/icons/dark-icon.svg";
import lightIcon from "@/assets/icons/light-icon.svg";
import { cn } from "@/lib/utils";
const SwitchMode: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const thumb = cn(
    "after:absolute after:content-[''] after:w-5 after:h-5 after:bg-background after:rounded-full after:top-0",
    theme === "dark" ? "after:left-0" : "after:right-0"
  );

  return (
    <div
      className={cn(
        "w-11 h-6 rounded-full inline-flex items-center gap-2 border-2 border-transparent bg-input relative cursor-pointer",
        thumb,
        theme === "dark" ? "justify-end" : "justify-start"
      )}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <div className="w-5 h-5 flex items-center justify-center select-none">
          <Image src={darkIcon} alt="dark-icon" width={14} height={14} />
        </div>
      ) : (
        <div className="w-5 h-5 flex items-center justify-center select-none">
          <Image src={lightIcon} alt="light-icon" width={14} height={14} />
        </div>
      )}
    </div>
  );
};

export default SwitchMode;
