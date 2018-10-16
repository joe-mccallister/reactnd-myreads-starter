import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render () {
        const shelves = { 
            currentlyReading: ['Currently Reading', 'currentlyReading'],
            wantToRead: ['Want to Read', 'wantToRead'],
            read: ['Read', 'read'],
        }
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
        <div className="list-books-content">
            {Object.keys(shelves).map((shelf) =>
                <Bookshelf
                    key={shelf}
                    books={this.props.books}
                    onUpdateShelf={this.props.onUpdateShelf}
                    title={shelves[shelf][0]}
                    shelf={shelves[shelf][1]}
                />
            )}
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
               
        </div>
        </div>
        )
    }        
}
export default ListBooks