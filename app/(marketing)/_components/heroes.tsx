import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const Heroes = () => {
  return (
    <ContainerScroll>
      <Image
        src={`/herosection-image.jpg`}
        alt="hero"
        height={720}
        width={1400}
        className="mx-auto rounded-2xl object-cover h-full object-left-top animate-fade-up opacity-0"
        draggable={false}
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      />
    </ContainerScroll>
  );
};
