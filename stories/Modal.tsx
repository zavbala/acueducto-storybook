import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./Button";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  onClose: () => void;
  showTrigger?: boolean;
  children: React.ReactNode;
}

export const Modal = ({
  open,
  title,
  onClose,
  children,
  description,
  confirmText,
  showTrigger = false,
}: Props) => (
  <Dialog.Root open={open} onOpenChange={onClose}>
    {showTrigger && (
      <Dialog.Trigger asChild>
        <Button primary label="Open" />
      </Dialog.Trigger>
    )}

    <Dialog.Portal>
      <Dialog.Overlay className="backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="text-[#F3F4F6] p-[24px] rounded-[24px] data-[state=open]:animate-contentShow bg-[#232A33] fixed top-[50%] left-[50%] max-h-[85vh] lg:w-[880px] md:w-[550px] w-[350px] max-w-[880px] translate-x-[-50%] translate-y-[-50%] border border-[#6B7280] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="m-0 font-medium">{title}</Dialog.Title>

        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          {description}
        </Dialog.Description>

        {children}

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <Button outline label={confirmText || "Cerrar"} onClick={onClose} />
          </Dialog.Close>
        </div>

        <Dialog.Close asChild>
          <button
            className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
