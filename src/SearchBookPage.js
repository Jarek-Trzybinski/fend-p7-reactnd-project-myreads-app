import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

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
        // 
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
                    // because match any books hasn't been found we need to set SearchResulat as empty array to avoid error with map function later
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

    // create listarray of searched books
    
    

    render() {
       const {searchResult} = this.state

       if (searchResult.constructor === Array) {
           console.log(`[Search Result is array]`);
       } else {
        console.log(`[Search Result isnt array]`);
        this.setState({searchResult: []});
       }
       
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                    <div className="search-books-input-wrapper">
                    
                   
                   
                    <input type="text"
                     placeholder="Search by title or author"
                     type="text"
                     value={this.state.query}

                     // invoke updateQuery on each key press
                     onChange={(event)=> this.updateQuery(event.target.value)}
                     />
                    {JSON.stringify(this.state.query)}
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                        // map search result 
                         
                        
                            searchResult.map(book => (
                                <li key={book.id}>
                                  <Book
                                      book={book}
                                       
                                  />
      
                                  </li>
                             ) 
                              )
                                               
                       
                       
                       
                    
                    }
                   
                    </ol>
                </div>
          </div>
        )

    }
}

export default SeachBookPage;