// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Minimal Library Management System. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with React, Redux Toolkit Query, Tailwind CSS, and Node.js.
        </p>
      </div>
    </footer>
  );
}
