import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

export const WoobleCardGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
        <div
          className="max-w-xs animate-fade-up opacity-0"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Jotion powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Jotion is all in one workspace application that allows for note
            making, project management, collaboration of teams and more.
          </p>
        </div>
        <Image
          src="/herosection-image.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl animate-fade-up opacity-0"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2
          className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          No delays, no timewaste, no loss.
        </h2>
        <p
          className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Jotion ensures seamless and smooth saving of user data in real time
          instantly.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div
          className="max-w-sm animate-fade-up opacity-0"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Start using blazing fast cutting edge functionalities.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Jotion provides various functionality like sharing, deleting,
            restoring, archiving, powerfull search of notes.
          </p>
        </div>
        <Image
          src="/herosection-image.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl animate-fade-up opacity-0"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        />
      </WobbleCard>
    </div>
  );
};
