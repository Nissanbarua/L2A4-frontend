
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation, useGetBooksQuery } from "@/features/api/bookApi";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function AllBooks() {
  const { data: books = [], isLoading, isError } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

const handleDelete = async (id: string) => {
  if (confirm("Are you sure you want to delete this book?")) {
    try {
      await deleteBook(id).unwrap();
      toast.success("Book deleted successfully.");
    } catch {
      toast.error("Failed to delete book.");
    }
  }
};

  if (isLoading) return <p className="text-center py-4">Loading books...</p>;
  if (isError) return <p className="text-center py-4 text-red-500">Failed to load books</p>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold  mb-4"> All Books</h2>
        <Link to="/create-book">
          <Button>Add New Book</Button>
        </Link>
      </div>

      <div className=" border rounded-lg overflow-x-auto">
        <table className=" text-left border-collapse min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Genre</th>
              <th className="px-4 py-2">ISBN</th>
              <th className="px-4 py-2">Copies</th>
              <th className="px-4 py-2">Available</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id} className="border-t">
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.genre}</td>
                <td className="px-4 py-2">{book.isbn}</td>
                <td className="px-4 py-2">{book.copies}</td>
                <td className="px-4 py-2">
                  {book.available ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-red-600 font-medium">No</span>
                  )}
                </td>
                <td className="px-4 py-2 flex justify-center space-x-2">
                  <Link to={`/edit-book/${book._id}`}>
                    <Button variant="outline" size="sm">Edit</Button>
                  </Link>
                  <Link to={`/borrow/${book._id}`}>
                    <Button variant="secondary" size="sm">Borrow</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
