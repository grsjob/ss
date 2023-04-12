import React, { useEffect } from "react";
import { useGetBooks } from "../../hooks/useGetBooks";

export const App = () => {
  const { books, fetchBooks } = useGetBooks();

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};
