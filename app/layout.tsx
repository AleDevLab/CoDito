import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoDito",
  description: "Control de gastos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="h-screen dark bg-gray-900 text-gray-100">
        <div className="flex h-full">
          <aside className="w-64 bg-gray-200 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 flex flex-col items-center pt-6">
            <div className="w-32 h-32 bg-blue-500 rounded-full"></div>
          </aside>

          <main className="flex-1 bg-white dark:bg-gray-900 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
