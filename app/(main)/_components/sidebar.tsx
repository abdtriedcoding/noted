import { UserMenu } from "./user-menu";
import { TrashBox } from "./trash-box";
import { DocumentList } from "./document-list";
import { SearchButton } from "./search-button"; 
import { SettingButton } from "./setting-button";
import { NewPageButton } from "./new-page-button";

export const Sidebar = () => {
  return (
    <aside className="w-64 p-4 flex-col hidden md:block bg-secondary dark:bg-[#303030] h-full">
      <UserMenu />
      <SearchButton />
      <SettingButton />
      <NewPageButton />
      <TrashBox />
      <DocumentList />
    </aside>
  );
};
