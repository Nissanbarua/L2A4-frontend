import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow border-b">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-gray-800">📚 Mini Library</h1>

      {/* Navigation Links */}
      <div className="space-x-3">
        <Link to="/books">
          <Button variant="ghost">All Books</Button>
        </Link>
        <Link to="/create-book">
          <Button variant="ghost">Add Book</Button>
        </Link>
        <Link to="/borrow-summary">
          <Button variant="ghost">Borrow Summary</Button>
        </Link>
      </div>
    </nav>
  );
}
