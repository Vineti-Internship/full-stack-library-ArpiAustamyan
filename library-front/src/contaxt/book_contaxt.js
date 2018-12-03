import React from 'react';
import Api from '../helpers/Api';

export const BookContext = React.createContext();

export class BookProvider extends React.Component {
  constructor() {
    super();
  }

  state = {
    allBooks: [],
    authorBooks: [],
    book: null
  };

  addBook = async (book) => {
    try {
      await Api.post('/books', book, 'book');
      await this.getAllBooks();
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  getBook = async (id) => {
    try {
      const res = await Api.get(`/books/${id}`);
      const book = await res.json();
      this.setState({ book });
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  updateBook = async (book) => {
    try {
      await Api.update(`/books/${book.id}`, book, 'book');
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  removeBook = async (e, book) => {
    e.preventDefault();

    const confirmed = window.confirm(`Do you want to remove ${book.title} book?`);
    if (confirmed) {
      try {
        await Api.delete(`/books/${book.id}`)
        await this.getAllBooks();
        window.alert("book is successfully deleted");
      } catch (error) {
        console.log(`ERROR: ${error.message}`);
      }
    } else {
      window.alert("woah, that was close!");
    }
  }

  getAllBooks = async () => {
    try {
      const res = await Api.get('/books');
      const books = await res.json();
      this.setState({
        allBooks: books
      });
    } catch (error) {
      console.log(`ERROR: ${error.message}`)
    }
  }

  getAuthorBooks = async (authorId) => {
    try {
      const res = await Api.get(`/authors/${authorId}`);
      const { books } = await res.json();
      this.setState({
        authorBooks: books
      });
    } catch (error) {
      console.log(`ERROR: ${error.message}`);
    }
  }

  render() {
    return (
      <BookContext.Provider value={
        {
          ...this.state,
          addBook: this.addBook,
          getBook: this.getBook,
          updateBook: this.updateBook,
          removeBook: this.removeBook,
          getAllBooks: this.getAllBooks,
          getAuthorBooks: this.getAuthorBooks
        }}>
        {this.props.children}
      </BookContext.Provider>
    )
  }
}