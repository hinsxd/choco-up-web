import { twMerge } from "tailwind-merge";

type ContainerProps = {
  size?: "small" | "medium" | "large";
  className?: string;
  children?: React.ReactNode;
};

const maxWidthClasses = {
  small: "max-w-3xl",
  medium: "max-w-5xl",
  large: "max-w-7xl",
};

export const Container = ({
  size = "large",
  className,
  children,
}: ContainerProps) => {
  return (
    <div className={twMerge("w-full px-5 sm:px-10", className)}>
      <div className={twMerge("mx-auto w-full", maxWidthClasses[size])}>
        {children}
      </div>
    </div>
  );
};
