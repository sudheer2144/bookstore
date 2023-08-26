
import { useEffect, useState } from "react";
import "../Styles/Books.css"

const Books = ({ books }) => {

    let topBooks = [books[7], books[18], books[13]]

    return (
        <div id="booksContainer">
            <div id="topContainer">
                {topBooks.length > 0 ?

                    topBooks.map((book) => {
                        let coverPhoto = book.volumeInfo.imageLinks.thumbnail;
                        let title = book.volumeInfo.title;
                        let description = book.volumeInfo.description;
                        return (
                            <div id={book.id}>
                                <div id="topCover">
                                    <img src={coverPhoto} alt="" />
                                </div>
                                <div id="desc">
                                    <h3 id="bookTitle">{title}</h3>
                                    <p id="bookDesc">{description}</p>
                                    <button>Now Read!</button>
                                </div>
                            </div>
                        )
                    })

                    : "Wont work"
                }
            </div>
            <h1 id="morebooks">More Books</h1>
            <div id="bottomContainer">
                {
                    books.map((book) => {
                        let coverPhoto = book.volumeInfo.imageLinks.thumbnail;
                        return (
                            <div id={book.id}>
                                <div id="cover">
                                    <img src={coverPhoto} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Books;