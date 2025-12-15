import Image, { ImageProps } from "next/image";

interface IconProps extends Omit<ImageProps, "width" | "height"> {
  size?: number;
  alt: string;
}

export function Icon({ size = 100, ...props }: IconProps) {
  return <Image width={size} height={size} {...props} alt={"icon"} />;
}
