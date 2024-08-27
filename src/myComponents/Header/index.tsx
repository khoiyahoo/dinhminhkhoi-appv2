import { type FC } from "react";
import Link from "next/link";
import { ROUTES } from "@/contants/common";
import { SOCIALS } from "@/contants/dummy";
import { useTheme } from "next-themes";
import SwitchMode from "@/myComponents/SwitchMode";
import HeaderPercentage from "@/myComponents/HeaderPercentage";
import { useRouter } from "next/router";
import { getPathName } from "@/utils/function";
import { cn } from "@/lib/utils";
import MenuHeaderMobile from "@/myComponents/MenuHeader";
const Header: FC = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const STYLE_MAPPING = {
    BURGER_TOP:
      "w-[1.25rem] h-[0.15rem] bg-primary rounded-full block transition-all duration-600 ease-out",
    BURGER_BOTTOM:
      "w-[1.5rem] h-[0.15rem] bg-primary rounded-full block transition-all duration-600 ease-out",
  } as const;

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center max-sm:justify-between sm:pl-56 sm:pr-56">
        <div className="hidden sm:flex">
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {ROUTES.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                className={cn(
                  "transition-colors hover:text-foreground font-medium",
                  getPathName(router.pathname).includes(getPathName(item.route))
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <MenuHeaderMobile>
          <div className="flex sm:hidden h-12 justify-center items-center cursor-pointer gap-2">
            <div className="gap-2 flex flex-col justify-center p-0 w-[2rem] h-full overflow-hidden">
              <span className={STYLE_MAPPING.BURGER_TOP}></span>
              <span className="w-full h-[0.2rem] bg-primary rounded-full block"></span>
              <span className={STYLE_MAPPING.BURGER_BOTTOM}></span>
            </div>
          </div>
        </MenuHeaderMobile>
        <div className="flex sm:flex-1 items-center justify-between space-x-2 sm:justify-end">
          <nav className="flex items-center gap-2">
            {SOCIALS.map((item, index) => {
              const IconDark = item.iconDark;
              const IconLight = item.iconLight;
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="transition-colors font-medium"
                >
                  {theme === "dark" ? <IconDark /> : <IconLight />}
                </Link>
              );
            })}
            <SwitchMode />
          </nav>
        </div>
      </div>
      <HeaderPercentage />
    </header>
  );
};
export default Header;
