import React, { Component } from 'react'
import Book from './Book';
import { Link } from 'react-router-dom'

class BookListPage extends Component {
    render() {
        const { books } = this.props;
        const {ChangeShelf} = this.props;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                      {books
                        .filter(book => book.shelf === 'currentlyReading')
                        .map(
                            book => (
                                <li key={book.id}>
                                    <Book 
                                    book={book}
                                    ChangeShelf={ChangeShelf}
                                    bookShelf={book.shelf}
                                    />
                                </li>
                            )
                        )
                        }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books
                        .filter(book => book.shelf === 'wantToRead')
                        .map(
                            book => (
                                <li key={book.id}>
                                    <Book 
                                    book={book}
                                    // passing method from from app.js to book.js
                                    ChangeShelf={ChangeShelf}
                                    bookShelf={book.shelf}
                                    />
                                </li>
                            )
                        )
                        }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books
                            .filter(book => book.shelf === 'read')
                            .map(
                                book => (
                                    <li key={book.id}>
                                        <Book 
                                        book={book}
                                        ChangeShelf={ChangeShelf}
                                        bookShelf={book.shelf}
                                        />
                                    </li>
                                )
                            )
                        }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
                <Link to="/search" >
                    <button>Add a book</button>
                </Link>
            </div>
          </div>
        )}
      
}

export default BookListPage;