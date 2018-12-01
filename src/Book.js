import React, { Component } from 'react'

class Book extends Component {
    
    render() {
        const { book } = this.props;
        // change shelf function
        const { ChangeShelf } = this.props

        // check if thumbnail exist 
        let showSmallThumbnail = () => {
            if (book.imageLinks !== undefined) {
                return book.imageLinks.smallThumbnail;
            } else {
               return  '';
            }
        }
        
        console.log(this.props);
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${showSmallThumbnail()})` }}></div>
                    <div className="book-shelf-changer">
                        {/* default value from this.props.book.shelf } */}

                        
                        <select value={this.props.bookShelf } onChange={(event) => ChangeShelf(book, event)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title"> {book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
         )
    }
}

export default Book