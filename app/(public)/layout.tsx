import { auth, clerkClient } from "@clerk/nextjs/server";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth().protect();

  const user = await clerkClient.users.getUser(userId);

  if (!user) return null;

  return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
}
