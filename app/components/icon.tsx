import Image, { ImageProps } from "next/image";

interface IconProps extends Omit<ImageProps, "width" | "height"> {
  size?: number;
  alt: string;
}
export default function Icon({
  size = 100,
  alt = "icon",
  ...props
}: IconProps) {
  return <Image width={size} height={size} alt={alt} {...props} />;
}
