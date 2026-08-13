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
        "inline-flex min-h-11 items-center gap-2 border px-3 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange",
        isActive
          ? "border-accent-orange bg-accent-orange text-black"
          : "border-white/15 bg-transparent text-neutral-300 hover:border-accent-orange hover:text-white",
      )}
      onClick={filterAction}
      type="button"
      aria-pressed={isActive}
    >
      <Image src={techLogo} alt="" aria-hidden="true" width={24} height={24} />
      <span>{techName}</span>
    </button>
  );
}
