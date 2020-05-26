import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Pagination extends Component {
constructor(props){
  super(props);
  this.paginate=this.paginate.bind(this);
}

paginate(pageNumber){
  this.props.paginateNumber(pageNumber)
}
  render() {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;