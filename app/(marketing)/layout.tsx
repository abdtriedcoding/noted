import { Navbar } from "./_components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-screen p-4 max-w-5xl mx-auto flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
