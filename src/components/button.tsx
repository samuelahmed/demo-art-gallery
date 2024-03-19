import { ChevronRight, ChevronLeft } from "lucide-react";
import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "button1" | "button2";
}

export default function Button({ children, variant }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Chevron = variant === "button1" ? ChevronRight : ChevronLeft;
  const flexOrder = variant === "button1" ? "flex-row-reverse" : "flex-row";

  return (
    // Make the button bigger and have icon ontop of it to avoid useState?
    <button
      className={`bigSholders flex bg-black text-white hover:bg-custom-orange ${flexOrder} h-[72px] w-[260px] items-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Chevron
        className={`h-full w-[56px] ${
          isHovered ? "bg-black" : "bg-custom-orange"
        }`}
      />
      <p className="w-full text-2xl"> {children} </p>
    </button>
  );
}
