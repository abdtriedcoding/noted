import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const Page = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center md:justify-start text-center gap-y-8 px-6 py-10">
      <Heading />
      <Heroes />
    </div>
  );
};

export default Page;
