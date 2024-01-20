import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="z-50 bg-background fixed top-0 flex items-center w-full p-6">
      <div className="hidden md:flex items-center gap-x-2">
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
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <>
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">Get Jotion free</Button>
        </>
        <>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents">Enter Jotion</Link>
          </Button>
        </>
      </div>
    </div>
  );
};

export default Navbar;
