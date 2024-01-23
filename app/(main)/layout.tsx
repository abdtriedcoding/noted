import Sidebar from "./_components/sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Sidebar />
      <main className="flex-1 px-4 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
