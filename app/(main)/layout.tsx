import Header from "../(marketing)/_components/header";
import Sidebar from "./_components/sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto">
        <div className="inline-flex md:hidden">
          <Header />
        </div>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
