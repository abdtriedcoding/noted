import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className="font-semibold">Jotion</p>
    </div>
  );
};
