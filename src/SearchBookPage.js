import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book';
import { Link } from 'react-router-dom'

class SeachBookPage extends Component {
    state = {
        query: '' ,
        searchResult: []
    }    
    // method update query state on every input event
    updateQuery = (query) => {
        // add typing query into state.query
        this.setState({ query: query})
        
        // create search list of search books as array and add it into state.searchResult
        if (query !== null ||  query!=='undefined') {
        this.createSearchResultArray(query);
        }
        else {
            this.setState({searchResult: []})
        }
    }

    createSearchResultArray = (query) => {
            if (query) {
            BooksAPI.search(query).then((searchedBooks) => {
                // need to check if searchBooks are array because it need to be use by map method later
                    if (searchedBooks.constructor === Array) {
                        this.setState({searchResult: searchedBooks})
                } else
                {
                    // because match of any books hasn't been found we need to set SearchResulat as empty array to avoid error with map function later
                    this.setState({searchResult: []});
                }
            })
            .catch((err) => {
                console.log("[BookAPI.search() error]: " + err);
                
            })
            } else {
            this.setState({searchResult: []})
        }
    }

    render() {
       const {searchResult} = this.state
       const {ChangeShelf} = this.props;
       const {MainPageBooks} = this.props;

       if (searchResult.constructor === Array) {
           console.log(`[Search Result is array]`);
       } else {
        console.log(`[Search Result isnt array]`);
        this.setState({searchResult: []});
       }
       
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" >
                    <button className="close-search">Close</button>
                </Link>
                    <div className="search-books-input-wrapper">
                    
                    <input type="text"
                     placeholder="Search by title or author"
                     type="text"
                     value={this.state.query}

                     // invoke updateQuery on each key press
                     onChange={(event)=> this.updateQuery(event.target.value)}
                     />
                    
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                            // map search result 
                            searchResult.map(foundBook => {
                                
                                // searchbook array don't have shelf value so we setting beging value as 'none'
                                let bookShelf = "none";

                                // check is search book with the same id is on mainPage if yes mainpage shelf will be assign to shelf value
                                MainPageBooks
                                .filter(MainPageBook => (MainPageBook.id === foundBook.id))
                                .map(MainPageBook => (bookShelf = MainPageBook.shelf))
                               
                                return (
                                    <li key={foundBook.id}>
                                    <Book
                                        book={foundBook}
                                        ChangeShelf={ChangeShelf}
                                        bookShelf={bookShelf}
                                         
                                    />
                                    </li>
                                )                              
                             } 
                              )

                    }
                   
                    </ol>
                </div>
          </div>
        )
    }
}

export default SeachBookPage;