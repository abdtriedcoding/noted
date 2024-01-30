import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";

export const Heroes = () => {
  return (
    <div className="relative rounded-xl w-full border-2 p-2">
      <Image
        width={1400}
        height={720}
        src="/herosection-image.png"
        priority
        fetchPriority="high"
        loading="eager"
        alt="Hero Image"
        draggable={false}
        className="rounded-xl dark:hidden object-contain animate-fade-up opacity-0"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      />
      <Image
        width={1400}
        height={720}
        src="/herosection-dark-image.png"
        priority
        fetchPriority="high"
        loading="eager"
        alt="Hero Image"
        draggable={false}
        className="rounded-xl hidden dark:block object-contain animate-fade-up opacity-0"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      />

      <BorderBeam size={150} duration={12} delay={9} borderWidth={2} />
    </div>
  );
};
