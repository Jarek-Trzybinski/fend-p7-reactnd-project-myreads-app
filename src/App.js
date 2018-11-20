import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookListPage from './BookListPage';
//import SearchBookPage from './SearchBookPage'


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
 

  render() {
    
    return (
      <div className="app">
        
          {/*<SearchBookPage /> */}
       
          <BookListPage books={this.state.books}/>
        </div>
    )
  }
}

export default BooksApp
