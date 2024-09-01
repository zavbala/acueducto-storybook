// @ts-nocheck

import cn from "classnames";
import { Eye, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Selector } from "./Selector";
import { useRef } from "react";

interface Props {
  title: string;
  cols: string[];
  rows: string[][];
  hideInMobile?: number[];
  onView: (id: number) => void;
  onRemove: (id: number) => void;
}

export const Table = ({
  cols,
  rows,
  title,
  onView,
  onRemove,
  hideInMobile,
}: Props) => {
  const [query, setQuery] = useState("");
  const [searchBy, setSearchBy] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const rowsData = rows.filter((row) =>
    row[searchBy].toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <nav className="flex lg:flex-row flex-col lg:justify-between lg:items-end lg:h-[10vh] my-1">
        <h2 className="text-[32px] text-[#E0E2EB]">{title}</h2>

        <div className="flex lg:flex-row flex-col h-full lg:items-end gap-3">
          <Input
            block
            id="search"
            value={query}
            ref={inputRef}
            label="Búsqueda"
            shortcut={["Ctrl", "K"]}
            onChange={(e) => setQuery(e.target.value)}
            onShortcut={() => inputRef.current?.focus()}
          />

          <Selector
            value={searchBy}
            onChange={(e) => setSearchBy(Number(e.target.value))}
            options={cols
              .slice(0, -1)
              .map((col, i) => ({ value: col, key: String(i) }))}
          />

          <Button primary label="Buscar" />
        </div>
      </nav>

      <table className="border-separate rounded-[8px] w-full border-spacing-0 my-7 bg-[#161A22] max-w-[1280px] text-[#9CA3AF] border border-[#374151]">
        <thead className="h-[48px] bg-[#2F3646]">
          <tr className="">
            {cols.map((col, i) => (
              <th
                key={i}
                className={cn(
                  "text-start p-[12px_15px]",
                  hideInMobile?.includes(i) && "hidden lg:table-cell",
                )}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rowsData.length === 0 && (
            <tr>
              <td
                colSpan={cols.length}
                className="text-center p-[12px_15px] text-[#9CA3AF]"
              >
                No se encontraron resultados
              </td>
            </tr>
          )}

          {rowsData.map((row, i) => (
            <tr key={i} className="h-[56px] p-[4px_10px]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    searchBy === j && "bg-[#2F3646]",
                    "p-[12px_15px] border-b border-[#374151]",
                    hideInMobile?.includes(j) && "hidden lg:table-cell",
                  )}
                >
                  {cell}
                </td>
              ))}

              {/* Actions */}
              <td className="border-b border-[#374151]">
                <div className="flex justify-center items-center space-x-3">
                  <button
                    type="button"
                    className="p-3"
                    onClick={() => onView(i)}
                  >
                    <Eye size={16} />
                  </button>

                  <button
                    type="button"
                    className="p-3"
                    onClick={() => onRemove(i)}
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
