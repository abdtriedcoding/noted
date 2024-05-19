import { UserMenu } from "./user-menu";
import { TrashBox } from "./trash-box";
import { SearchButton } from "./search-button";
import { DocumentList } from "./document-list";
import { SettingButton } from "./setting-button";
import { NewPageButton } from "./new-page-button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Sidebar = () => {
  return (
    <ScrollArea className="h-[100vh]">
      <div className="p-2 mr-2 space-y-1">
        <UserMenu />
        <SearchButton />
        <SettingButton />
        <NewPageButton />
        <TrashBox />
      </div>
      <Separator className="my-2" />
      <DocumentList />
    </ScrollArea>
  );
};
