import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-opacity hover:opacity-80",
        variant === "primary" &&
          "rounded-lg bg-[#232227] px-6 py-4 text-base text-white",
        variant === "ghost" &&
          "text-base text-[#262D30] underline-offset-4 hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
