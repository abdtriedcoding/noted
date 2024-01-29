export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen dark:bg-[#1F1F1F]">{children}</div>;
}
