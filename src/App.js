import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Books from "./Components/Books";
import "./Styles/App.css"
function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      let books1 = await fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
      let books2 = await fetch("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");
      let data1 = await books1.json();
      let data2 = await books2.json();
      setBooks([...data1.items, ...data2.items])
    }
    getBooks();
  }, []);


  return (
    <div className="App">
      <NavBar />
      {books.length != 0 ? <Books books={books} /> : ""}
    </div>
  );
}

export default App
