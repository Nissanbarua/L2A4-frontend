import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useGetBookQuery, useUpdateBookMutation } from "@/features/api/bookApi";

export default function EditBook() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: book, isLoading: loadingBook } = useGetBookQuery(id || "");
  const [updateBook, { isLoading: updating }] = useUpdateBookMutation();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        genre: book.genre || "",
        isbn: book.isbn || "",
        description: book.description || "",
        copies: book.copies,
        available: book.available,
      });
    }
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : name === "copies" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    await updateBook({ id, data: formData });
    navigate("/books");
  };

  if (loadingBook) return <p className="text-center py-4">Loading book details...</p>;

  return (
    <div className="max-w-lg mx-auto border p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">✏️ Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" value={formData.author} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="genre">Genre</Label>
          <Input id="genre" name="genre" value={formData.genre} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="isbn">ISBN</Label>
          <Input id="isbn" name="isbn" value={formData.isbn} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="copies">Copies</Label>
          <Input type="number" min={0} id="copies" name="copies" value={formData.copies} onChange={handleChange} required />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="available" name="available" checked={formData.available} onChange={handleChange} />
          <Label htmlFor="available">Available</Label>
        </div>
        <Button type="submit" disabled={updating} className="w-full">
          {updating ? "Updating..." : "Update Book"}
        </Button>
      </form>
    </div>
  );
}
