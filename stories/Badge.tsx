import cn from "classnames";

interface Props {
  label: string;
  variant?: "default" | "success" | "warning" | "error" | string;
}

const VariantMap = {
  default: "bg-gray-200",
  warning: "bg-[#FDE68A]",
  success: "bg-[#34D399]",
  error: "bg-[#F87171]",
};

export const Badge = ({ label, variant }: Props) => {
  return (
    <div
      className={cn(
        VariantMap[(variant || "default") as keyof typeof VariantMap],
        "p-[4px_16px] select-none w-[115px] text-center text-[#161A22] h-[32px] rounded-[4px]",
      )}
    >
      {label}
    </div>
  );
};
