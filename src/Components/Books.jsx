import React, { useState } from "react";
import { books as bookdata } from "../constants/mockData";
import BookCard from "./BookCards";
import SideCard from "./SideCard";
import styles from "../Components/Books.module.css";
import SearchBox from "./SearchBox";
function Books() {
  const [books, setbook] = useState(bookdata);
  const [search, setsearch] = useState("");
  const [liked, setliked] = useState("");
  const handlist = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setliked(newLikedList);
    } else {
      setliked((liked) => [...liked, book]);
    }
  };

  const serachHandler = () => {
    if (search) {
      const newBook = bookdata.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setbook(newBook)
    }else{
      setbook(bookdata)
    }
  };
  return (
    <>
      <SearchBox search={search} setsearch={setsearch} serachHandler={serachHandler} />
      <div className={styles.container}>
        <div className={styles.Cards}>
          {books.map((book) => (
            <BookCard key={book.id} data={book} handlist={handlist} />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.fav}>
            <h4>favorite</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
