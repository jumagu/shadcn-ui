import { Footer, Navbar, Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="flex overflow-hidden bg-white pt-16 dark:bg-[#09090B]">
        <Sidebar />

        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64 dark:bg-[#18181B]"
        >
          <main>
            <div className="pt-6 px-4">
              <div className="w-full min-h-[calc(100vh-230px)]">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-[#09090B]">
                  {children}
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
