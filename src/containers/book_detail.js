import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    if(!this.props.activeBook) {
      return ( <div>Please select a book.</div> );
    }

    return (
      <div>
        <h3>Selected book:</h3>
        <div>{this.props.activeBook.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);