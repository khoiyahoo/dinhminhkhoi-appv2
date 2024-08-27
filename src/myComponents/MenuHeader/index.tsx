import { type FC } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ROUTES } from "@/contants/common";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getPathName } from "@/utils/function";
import { useRouter } from "next/router";
interface Props {
  children: React.ReactNode;
}

const MenuHeaderMobile: FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col items-center flex-1 py-3">
          <ul className="flex items-center justify-center flex-col gap-4">
            {ROUTES.map((item, index) => (
              <Link key={index} href={item.route}>
                <li
                  className={cn(
                    "px-3 py-1.5 rounded-md transition-colors hover:text-foreground font-medium",
                    getPathName(router.pathname).includes(
                      getPathName(item.route)
                    )
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuHeaderMobile;
