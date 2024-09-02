import React from "react";
import cn from "classnames";
import { Loader } from "lucide-react";

export interface Props {
  label: string;
  primary?: boolean;
  loading?: boolean;
  outline?: boolean;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

const Sizes = {
  small: "w-[100px] h-[32px]",
  medium: "w-[120px] h-[44px]",
  large: "w-[140px] h-[56px]",
};

export const Button = ({
  label,
  loading = false,
  primary = false,
  outline = false,
  size = "medium",
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={cn(
        "flex justify-center items-center",
        "transition-all duration-200 ease-in-out",
        "rounded-[8px] border border-[#CAF684] p-[10px_16px]",
        size && Sizes[size],
        primary && "bg-[#B1F149] lg:hover:bg-[#b9f25b]",
        (outline || !primary) &&
          "lg:hover:bg-[#d8f8a4]/20 bg-transparent text-[#B1F149]",
      )}
      {...props}
    >
      {loading ? (
        <Loader size={24} color="currentColor" className="animate-spin " />
      ) : (
        <span className="font-bold text-[14px]">{label}</span>
      )}
    </button>
  );
};
