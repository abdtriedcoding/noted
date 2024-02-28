import { Heroes } from "./_components/heroes";
import { Heading } from "./_components/heading";

const MarketingPage = () => {
  return (
    <div className="min-h-full dark:bg-[#1F1F1F] flex flex-col items-center text-center justify-center lg:justify-start gap-y-8 px-4 py-10">
      <Heading />
      <Heroes />
    </div>
  );
};

export default MarketingPage;
