import * as React from "react";
import { cn } from "@/lib/utils";

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  cursor?: "pointer" | "grab" | "default";
  size?: "sm" | "md" | "lg" | "auto";
  disabled?: boolean;
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  auto: "",
};

const cursorMap = {
  pointer: "cursor-pointer",
  grab: "cursor-grab",
  default: "cursor-default",
};

const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  (
    { className, cursor = "pointer", size = "md", disabled = false, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center touch-none select-none",
          sizeMap[size],
          cursorMap[cursor],
          disabled && "opacity-50 pointer-events-none",
          className
        )}
        {...props}
      />
    );
  }
);
IconWrapper.displayName = "IconWrapper";

export default IconWrapper;
