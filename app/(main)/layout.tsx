import { Sidebar } from "./_components/sidebar";
import { Header } from "../(marketing)/_components/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto py-4">
        <Header />
        {children}
      </main>
    </div>
  );
}