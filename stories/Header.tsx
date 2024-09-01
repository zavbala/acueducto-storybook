import React from "react";

export interface Props {
  children?: React.ReactNode;
}

export const Header = ({ children }: Props) => (
  <header className="border-b h-[7vh] border-[#3A424E] bg-[#161A22] flex items-center justify-between px-10">
    {children}
  </header>
);
