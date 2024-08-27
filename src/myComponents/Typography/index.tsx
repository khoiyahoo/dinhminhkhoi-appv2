import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

type IVariant = "h2" | "h3" | "h4" | "p";
type IType = "bold" | "regular";
type ISize = "normal" | "small" | "extraSmall";

interface PropsType {
  type?: IType;
  variant: IVariant;
  children: ReactNode;
  size?: ISize;
  className?: string;
}

const Typography: FC<PropsType> = ({
  variant,
  type = "regular",
  size = "normal",
  className = "",
  children,
}) => {
  const Tag = variant;
  const H3_STYLE_MAPPING: Record<IType, string> = {
    bold: "font-bold text-xl leading-[1.81rem]",
    regular: "font-medium text-xl leading-[1.81rem]",
  } as const;

  const P_STYLE_MAPPING: Record<ISize, Record<IType, string>> = {
    normal: {
      bold: "font-bold text-base",
      regular: "font-normal text-base",
    },
    small: {
      regular: "font-medium text-sm leading-[1.3125rem]",
      bold: "font-bold text-sm leading-[1.3125rem]",
    },
    extraSmall: {
      regular: "font-medium text-xs leading-[1.125rem]",
      bold: "font-bold text-xs leading-[1.125rem]",
    },
  } as const;

  const VARIANT_STYLE_MAPPING: Record<string, string> = {
    h2: "font-medium text-[1.75rem] leading-[2.75rem]",
    h3: H3_STYLE_MAPPING[type],
    h4: "font-bold text-base leading-6",
    p: P_STYLE_MAPPING[size][type],
  } as const;

  return (
    <Tag className={cn(VARIANT_STYLE_MAPPING[variant], className)}>
      {children}
    </Tag>
  );
};

export default Typography;
