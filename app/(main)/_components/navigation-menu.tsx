import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { UserMenu } from "@/app/(main)/_components/user-menu";
import { TrashBox } from "@/app/(main)/_components/trash-box";
import { DocumentList } from "@/app/(main)/_components/document-list";
import { SearchButton } from "@/app/(main)/_components/search-button";
import { SettingButton } from "@/app/(main)/_components/setting-button";
import { NewPageButton } from "@/app/(main)/_components/new-page-button";

export const NavigationMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="inline-flex md:hidden" size="sm" variant="ghost">
          <MenuIcon className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="dark:bg-[#303030] dark:text-slate-300">
        <div className="mt-4">
          <UserMenu />
          <SearchButton />
          <SettingButton />
          <NewPageButton />
          <TrashBox />
          <DocumentList />
        </div>
      </SheetContent>
    </Sheet>
  );
};
