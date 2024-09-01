interface Props {
  label: string;
  content: string | React.ReactNode;
}

export const KeyValue = ({ label, content }: Props) => {
  return (
    <div className="flex flex-col space-y-2 text-[#F0F1F5]">
      <h1 className="font-bold">{label}</h1>
      {content}
    </div>
  );
};
