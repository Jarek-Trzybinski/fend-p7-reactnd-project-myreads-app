import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookListPage from './BookListPage';
import SearchBookPage from './SearchBookPage'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  // copy booklist as array from BookAPI and pass it into state.books
  componentDidMount() {
    BooksAPI.getAll().then(
      BooklistArray => this.setState({
        books: BooklistArray
      })
    )
  }
  

  ChangeShelf = (book, event) =>  {
  
   //values inside book components
   let value = event.target.value;

    // update(book, shelf)
   // * book: `<Object>` containing at minimum an `id` attribute
   // * shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  

   // when books are updated page will copy books again and refresh page
   BooksAPI.update(book, value).then(()=>this.componentDidMount())
   
  }


  render() {
    
    return (
      <div className="app">
        
          <SearchBookPage />

          {/*<BookListPage 
            books={this.state.books}
            ChangeShelf={this.ChangeShelf}
          /> */}
        </div>
    )
  }
}

export default BooksApp
