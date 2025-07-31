import { useGetBorrowSummaryQuery } from "@/features/api/borrowApi";

export default function BorrowSummary() {
  const { data: summary = [], isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading) return <p className="text-center py-4">Loading borrow summary...</p>;
  if (isError) return <p className="text-center py-4 text-red-500">Failed to load borrow summary</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Borrow Summary</h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Book Title</th>
              <th className="px-4 py-2">ISBN</th>
              <th className="px-4 py-2">Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {summary.length > 0 ? (
              summary.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.isbn}</td>
                  <td className="px-4 py-2">{item.totalQuantity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No borrowed books yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
