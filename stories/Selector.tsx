import { ChevronDown, ChevronsUp } from "lucide-react";

type KeyValue = {
  key: string;
  value: string;
};

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  options: KeyValue[];
}

const defaultOptions = [
  { key: "1", value: "Option 1" },
  { key: "2", value: "Option 2" },
  { key: "3", value: "Option 3" },
];

export const Selector = ({ options = defaultOptions, ...props }: Props) => {
  return (
    <div className="relative bg-[#3A424E] rounded-[8px] border border-[#4B5563]">
      <select
        className="appearance-none lg:w-[170px] w-full p-[10px_16px] bg-transparent text-[#D1D5DB]"
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none w-[16px] h-[16px] text-[#D1D5DB] absolute right-[16px] top-[50%] transform -translate-y-1/2" />
    </div>
  );
};
