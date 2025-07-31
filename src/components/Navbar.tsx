import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap gap-4 sm:gap-8 items-center justify-between px-6 py-4 bg-white shadow border-b">
    
     <Button variant="link">
       <Link to="/books" className="text-xl font-bold text-gray-800">Nissan Library</Link>
     </Button>

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
