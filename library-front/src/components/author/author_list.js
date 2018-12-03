import React from 'react';
import { AuthorContext } from '../../context/author_context';
import './author_list.css';

export default class AuthorListPage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <AuthorContext.Consumer>
        {
          ({ getAllAuthors, allAuthors }) =>
            <AuthorList
              {...this.props}
              getAllAuthors={getAllAuthors}
              allAuthors={allAuthors}
            />}
      </AuthorContext.Consumer >
    )
  }
};

class AuthorItem extends React.Component {

  render() {
    const { author: { id, name, surename, email, birthyear, books } } = this.props;
    const count = books ? books.length : 0;

    return (
      <div>
        {
          id &&
          <div className="author">
            <h2>Author: {name} {surename}</h2>
            <div>
              <label>Email: {email}</label>
              <label>Born: {birthyear} </label>
              <label>Books Count: {count}</label>
            </div>
          </div>
        }
      </div>
    );
  }
}


class AuthorList extends React.Component {
  constructor() {
    super();
    this.state = {
      author: null
    }
    this.getList = this.getList.bind(this);
  }

  async getList() {
    const { getAllAuthors, allAuthors } = this.props;
    await getAllAuthors();
    this.setState({ authors: allAuthors });
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    const { authors } = this.state;
    return (
      <div className="author-list">
        {
          authors &&
          <div>
            {
              this.state.authors.map(author => <AuthorItem {...{ author }} key={author.id} />)
            }
          </div>
        }
      </div>
    );
  }
}
