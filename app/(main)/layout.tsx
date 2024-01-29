import { Sidebar } from "./_components/sidebar";
import { NavigationMenu } from "./_components/navigation-menu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F] dark:text-slate-300">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto">
        <NavigationMenu />
        {children}
      </main>
    </div>
  );
}
