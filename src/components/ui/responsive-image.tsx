import Image, { type ImageProps } from "next/image";

type ResponsiveImageProps = Omit<ImageProps, "className"> & {
  className?: string;
};

export function ResponsiveImage({ className = "", alt, ...props }: ResponsiveImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-slate-100 ${className}`}>
      <Image
        className="object-cover"
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        {...props}
      />
    </div>
  );
}
