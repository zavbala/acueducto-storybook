import cn from "classnames";
import { forwardRef, useEffect } from "react";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  block?: boolean;
  shortcut?: string[];
  onShortcut?: () => void;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, shortcut, onShortcut, block, ...props }, ref) => {
    useEffect(() => {
      if (!shortcut) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        const keys = shortcut.map((key) => key.toLowerCase());
        const isShortcutPressed = keys.every((key) => {
          if (key === "ctrl") return event.ctrlKey;
          if (key === "shift") return event.shiftKey;
          if (key === "alt") return event.altKey;
          return event.key.toLowerCase() === key;
        });

        if (isShortcutPressed) {
          event.preventDefault();
          if (onShortcut) onShortcut();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [shortcut, onShortcut]);

    return (
      <div
        className={cn(
          "relative w-[288px] flex space-y-1 flex-col",
          block && "w-full",
        )}
      >
        <label className="text-[#9CA3AF] text-[16px]" htmlFor={props.id}>
          {label}
        </label>

        <input
          ref={ref}
          onKeyDown={(event) => {
            if (!shortcut) return;

            const keys = shortcut.map((key) => key.toLowerCase());

            const isShortcutPressed = keys.every((key) => {
              if (key === "ctrl") return event.ctrlKey;
              if (key === "shift") return event.shiftKey;
              if (key === "alt") return event.altKey;
              return event.key.toLowerCase() === key;
            });

            if (isShortcutPressed) {
              console.log("shortcut pressed");
              event.preventDefault();
              if (onShortcut) onShortcut();
            }
          }}
          type="text"
          className="bg-[#3A424E] transition-all duration-100 lg:hover:bg-[#2e353e] border-[#4B5563] text-[#D1D5DB] rounded-[8px] p-[10px_16px] focus:outline-none"
          {...props}
        />

        {shortcut && (
          <kbd className="lg:block hidden absolute bg-[#3A424E] rounded-md px-2 py-1 text-xs text-[#9CA3AF] text-[12px] right-0 -top-2 mt-[10px]">
            {shortcut.join(" + ")}
          </kbd>
        )}
      </div>
    );
  },
);
