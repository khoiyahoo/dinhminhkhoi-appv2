import { type FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Typography from "@/myComponents/Typography";

interface Props {
  children: React.ReactElement;
  href: string;
  title: string;
  className?: string;
}

const ItemContact: FC<Props> = ({ children, title, href, className }) => {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-2 group", className)}
    >
      <div className="w-12 h-12 rounded-2xl bg-gray-200 p-2 flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
        {children}
      </div>
      <Typography
        size="normal"
        type="bold"
        variant="p"
        className="text-justify"
      >
        {title}
      </Typography>
    </Link>
  );
};

export default ItemContact;
