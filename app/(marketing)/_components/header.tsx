import DocumentList from "@/app/(main)/_components/document-list";
import NewPageButton from "@/app/(main)/_components/new-page-button";
import SearchButton from "@/app/(main)/_components/search-button";
import SettingButton from "@/app/(main)/_components/setting-button";
import TrashBox from "@/app/(main)/_components/trash-box";
import UserMenu from "@/app/(main)/_components/user-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="ghost">
          <MenuIcon className="h-8 w-8 text-muted-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent className="dark:bg-[#1F1F1F]">
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

export default Header;
