import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddBookMutation } from "@/features/api/bookApi";

export default function AddBook() {
  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "copies" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBook(formData);
    navigate("/books");
  };

  return (
    <div className="max-w-lg mx-auto border p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">➕ Add New Book</h2>
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
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Adding..." : "Add Book"}
        </Button>
      </form>
    </div>
  );
}
