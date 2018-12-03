import React from 'react';
import { BookContext } from '../../context/book_context';
import './book_list.css';

export default class BookListPage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <BookContext.Consumer>
        {
          ({ getAllBooks, allBooks }) =>
            <BookList
              {...this.props}
              getAllBooks={getAllBooks}
              allBooks={allBooks}
            />}
      </BookContext.Consumer >
    )
  }
};

class BookItem extends React.Component {

  render() {
    const { book: { id, title, year, genre, rating, description, author } } = this.props;
    const {name, surname} = author;

    return (
      <div>
        {
          id &&
          <div className="book-item">
            <h2>Book: {title} </h2>
            <div>
              <label>Author: {name} {surname}</label>
              <label>Year: {year}</label>
              <label>Genre: {genre} </label>
              <label>Rating: {rating}</label>
              <label>Description: {description}</label>
            </div>
          </div>
        }
      </div>
    );
  }
}


class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      books: null
    }
    this.getList = this.getList.bind(this);
  }

  async getList() {
    const { getAllBooks, allBooks } = this.props;
    await getAllBooks();
    this.setState({ books: allBooks });
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    const { books } = this.state;
    return (
      <div className="book-list">
        {
          books &&
          <div>
            {
              this.state.books.map(book => <BookItem {...{ book }} key={book.id} />)
            }
          </div>
        }
      </div>
    );
  }
}
