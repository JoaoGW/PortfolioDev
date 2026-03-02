import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type TechFilterButtonTypes = {
  techLogo: StaticImageData;
  techName: string;
  filterAction: () => void;
  isActive?: boolean;
};

export function TechFilterButton({
  techLogo,
  techName,
  filterAction,
  isActive = false,
}: TechFilterButtonTypes) {
  return (
    <button
      className={cn(
        "flex flex-row justify-center items-center gap-2 border-2 p-3 rounded-xl transition-colors duration-200",
        isActive
          ? "border-[#72BF6A] bg-[#72BF6A]/15 text-white"
          : "border-neutral-600 bg-transparent text-neutral-300 hover:border-[#72BF6A]/60 hover:text-white",
      )}
      onClick={filterAction}
    >
      <Image src={techLogo} alt={`Logo ${techName}`} width={38} height={38} />
      <span className="font-bold text-xl">{techName}</span>
    </button>
  );
}
