import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  "whitespace-nowrap rounded-full font-bold shadow-md transition-all duration-300 hover:scale-105",
  {
    variants: {
      variant: {
        white: ["text-chocoup-medium-slate-blue", "bg-white"],
        gradient: [
          "text-white",
          "bg-[linear-gradient(97deg,var(--medium-slate-blue),#16cbe1)]",
        ],
      },
      size: {
        small: ["py-2", "px-5", "text-xs"],
        medium: ["py-3", "px-[1.7rem]", "text-sm"],
        large: ["py-4", "px-8", "text-base"],
      },
      responsive: {
        true: "",
      },
    },
    compoundVariants: [
      {
        responsive: true,
        size: "small",
        className: ["lg:text-sm"],
      },
      {
        responsive: true,
        size: "medium",
        className: ["lg:text-base"],
      },
      {
        responsive: true,
        size: "large",
        className: ["lg:text-lg"],
      },
    ],
    defaultVariants: {
      variant: "white",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({
  className,
  variant,
  responsive,
  size,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={twMerge(button({ variant, size, className, responsive }))}
    {...props}
  />
);
