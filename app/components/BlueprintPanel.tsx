import { ReactNode } from "react";

interface BlueprintPanelProps {
  children: ReactNode;
  className?: string;
}

export default function BlueprintPanel({ children, className = "" }: BlueprintPanelProps) {
  return (
    <div className={`relative border border-parchment-line p-5 md:p-7 ${className}`}>
      {/* Top-Left Tick */}
      <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-2 border-brass border-r-0 border-b-0" aria-hidden="true" />
      
      {/* Top-Right Tick */}
      <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-2 border-brass border-l-0 border-b-0" aria-hidden="true" />
      
      {/* Bottom-Right Tick */}
      <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-2 border-brass border-l-0 border-t-0" aria-hidden="true" />
      
      {/* Bottom-Left Tick */}
      <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-2 border-brass border-r-0 border-t-0" aria-hidden="true" />
      
      {children}
    </div>
  );
}