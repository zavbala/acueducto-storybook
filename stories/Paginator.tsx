import cn from "classnames";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useEffect } from "react";

interface Props {
  totalPages: number;
  currentPage: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onPageChange: (page: number) => void;
}

export const Paginator = ({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPrevPage,
}: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // e.preventDefault();

      if (e.key === "ArrowLeft" && currentPage === 1) return;
      if (e.key === "ArrowRight" && currentPage === totalPages) return;

      if (e.key === "ArrowLeft") onPrevPage();
      if (e.key === "ArrowRight") onNextPage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, totalPages, onNextPage, onPrevPage]);

  return (
    <div className="flex flex-wrap my-3 gap-[10px]">
      <button
        type="button"
        title="Ir al inicio"
        className="text-[#6B7280]"
        onClick={() => onPageChange(1)}
      >
        <ChevronsLeft size={24} />
      </button>

      <button
        type="button"
        title="Anterior"
        className="text-[#6B7280]"
        disabled={currentPage === 1}
        onClick={() => onPrevPage()}
      >
        <ChevronLeft size={24} />
      </button>

      {new Array(totalPages).fill(0).map((_, index) => (
        <button
          key={index}
          className={cn(
            index + 1 === currentPage && "bg-[#232A33] text-[#9CA3AF]",
            "p-[4px_8px] flex items-center justify-center rounded-[4px] text-[#6B7280] w-[36px] h-[28px]",
          )}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        type="button"
        title="Siguiente"
        className="text-[#6B7280]"
        onClick={() => onNextPage()}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={24} />
      </button>

      <button
        type="button"
        title="Ir al final"
        className="text-[#6B7280]"
        onClick={() => onPageChange(totalPages)}
      >
        <ChevronsRight size={24} />
      </button>
    </div>
  );
};
