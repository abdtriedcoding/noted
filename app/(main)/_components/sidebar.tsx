import UserItem from "./user-menu";

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 flex-col hidden md:block bg-background dark:bg-[#303030] h-full">
      <UserItem />
    </aside>
  );
};

export default Sidebar;
