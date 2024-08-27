import { useEffect, useState, type FC } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import darkIcon from "@/assets/icons/dark-icon.svg";
import lightIcon from "@/assets/icons/light-icon.svg";

const SwitchMode: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      id="airplane-mode"
      checked={resolvedTheme === "dark"}
      onCheckedChange={toggleTheme}
      className="relative"
    >
      {resolvedTheme === "dark" ? (
        <Image
          src={lightIcon}
          alt="light-icon"
          width={14}
          height={14}
          className="absolute left-[3px] top-[3px]"
        />
      ) : (
        <Image
          src={darkIcon}
          alt="dark-icon"
          width={14}
          height={14}
          className="absolute right-[3px] top-[3px]"
        />
      )}
    </Switch>
  );
};

export default SwitchMode;
