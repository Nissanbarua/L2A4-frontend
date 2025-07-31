import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBorrowBookMutation } from "@/features/api/borrowApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BorrowForm() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookId) return;

    await borrowBook({ bookId, data: { quantity, dueDate } });
    navigate("/borrow-summary");
  };

  return (
    <div className="max-w-md mx-auto border p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Borrow Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            type="number"
            id="quantity"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Borrowing..." : "Borrow"}
        </Button>
      </form>
    </div>
  );
}
