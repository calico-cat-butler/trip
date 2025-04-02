import { ReactNode } from "react";
import "@styles/responsive-grid-system.css";

type GridProps = {
  children?: ReactNode;
  className?: string;
};

export default function Grid({
                               children,
                               className = "",
                             }: GridProps) {
  return (
    <div
      className={`_responsive-grid-system ${className}`}
    >
      {children}
    </div>
  );
}
