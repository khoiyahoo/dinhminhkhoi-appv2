import { type FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTES } from "@/constants/common";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getPathName } from "@/utils/function";
import { useRouter } from "next/router";
import useScrollToSection from "@/hooks/useScrollToSection";
import Typography from "@/myComponents/Typography";
interface Props {
  children: React.ReactNode;
}

const MenuHeaderMobile: FC<Props> = ({ children }) => {
  const router = useRouter();
  const handleScrollContact = useScrollToSection("contact");
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col items-center flex-1 py-3">
          <ul className="flex items-center justify-center flex-col gap-4">
            {ROUTES.map((item, index) =>
              item.title === "Contact" ? (
                <SheetClose
                  onClick={handleScrollContact}
                  key={index}
                  className="bg-primary px-2 py-1 rounded-sm transition-colors hover:text-foreground font-medium cursor-pointer"
                >
                  <Typography
                    size="normal"
                    type="bold"
                    variant="h4"
                    className="text-sm text-secondary"
                  >
                    {item.title}
                  </Typography>
                </SheetClose>
              ) : (
                <SheetClose
                  key={index}
                  asChild
                  className={cn(
                    "px-3 py-1.5 rounded-md transition-colors hover:text-foreground font-medium",
                    getPathName(router.pathname).includes(
                      getPathName(item.route)
                    )
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  <Link href={item.route}>{item.title}</Link>
                </SheetClose>
              )
            )}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuHeaderMobile;
