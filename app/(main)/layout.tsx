import { Sidebar } from "./_components/sidebar";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NavigationMenu } from "./_components/navigation-menu";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth().protect();

  const user = await clerkClient.users.getUser(userId);

  if (!user) return null;

  return (
    <div className="flex min-h-screen">
      <aside className="dark:bg-[#202020] fixed left-0 top-0 h-[100vh] w-72 border-r-2 hidden md:block">
        <Sidebar />
      </aside>

      <main className="dark:bg-[#1F1F1F] flex-1 overflow-y-auto md:ml-72">
        <NavigationMenu />
        {children}
      </main>
    </div>
  );
}
