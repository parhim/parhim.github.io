import { useTheme } from "../hooks/useTheme";
import type { EducationEntry } from "../content/types";

type EducationLogoProps = {
  entry: EducationEntry;
  className: string;
  width: number;
  height: number;
};

export function EducationLogo({ entry, className, width, height }: EducationLogoProps) {
  const { theme } = useTheme();
  const src =
    theme === "dark" && entry.logoSrcDark ? entry.logoSrcDark : entry.logoSrc;

  if (!src) return null;

  return (
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  );
}
