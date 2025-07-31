import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllBooks from "./pages/AllBooks";
import BorrowForm from "./pages/BorrowForm";
import BorrowSummary from "./pages/BorrowSumarry";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/books" />} />
            <Route path="/books" element={<AllBooks />} />
            <Route path="/create-book" element={<AddBook />} />
            {/* <Route path="/books/:id" element={<BookDetails />} /> */}
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/borrow/:bookId" element={<BorrowForm />} />
            <Route path="/borrow-summary" element={<BorrowSummary />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
