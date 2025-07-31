// import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

// import AllBooks from "./pages/AllBooks";
// import AddBook from "./pages/AddBook";
// import BookDetails from "./pages/BookDetails";
// import EditBook from "./pages/EditBook";
// import BorrowForm from "./pages/BorrowForm";
// import BorrowSummary from "./pages/BorrowSummary";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <main className="p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="/create-book" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/borrow/:bookId" element={<BorrowForm />} />
          <Route path="/borrow-summary" element={<BorrowSummary />} />
        </Routes>
      </main> */}
    </>
  );
}

export default App;
