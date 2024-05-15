import { Navbar } from "./_components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="p-4 min-h-screen max-w-5xl mx-auto">{children}</main>
    </>
  );
}
