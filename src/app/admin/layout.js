// src/app/layout.js

import '../styles/globals.css';

export const metadata = {
  title: 'Admin Panel - WISE Academy',
  description: 'Admission Panel for WISE Academy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-[260px] bg-[#092B58] text-white flex flex-col justify-start rounded-r-2xl py-6 px-6 shadow-md">
            {/* Logo */}
            <div className="mb-7" style={{ textAlign: 'center' }}>
              <h2 className="text-white text-2xl font-bold tracking-widest">WISE</h2>
              <p className="text-sm text-white font-light">ACADEMY</p>
            </div>

            {/* Navigation */}
            <nav className="space-y-2 text-sm font-medium">
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white hover:text-[#092B58] transition">
                📊 Insights
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-[#092B58] shadow">
                📋 Admission Flow
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white hover:text-[#092B58] transition">
                🗓️ Interview Schedule
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white hover:text-[#092B58] transition">
                🏫 Academic Year Roster
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white hover:text-[#092B58] transition">
                📁 WISE Database
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white hover:text-[#092B58] transition">
                👨‍👩‍👧‍👦 WISE Families
              </a>
            </nav>

            {/* Optional Footer */}
            <div className="text-xs text-white mt-auto opacity-50 text-center">
              &copy; 2025 WISE Academy
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
