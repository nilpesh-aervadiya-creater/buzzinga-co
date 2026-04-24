import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  heading,
  subheading,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <h2 className="text-4xl font-semibold leading-tight text-[#262D30] md:text-5xl">
        {heading}
      </h2>
      {subheading && (
        <p className="max-w-2xl text-xl text-[#262D30]">{subheading}</p>
      )}
    </div>
  );
}
