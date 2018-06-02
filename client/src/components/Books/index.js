import React, { Component } from 'react';
import { getBookWithReviewer } from '../../actions';
import { connect } from 'react-redux';

class BookView extends Component {


componentWillMount(){
  this.props.dispatch(getBookWithReviewer(this.props.match.params.id))
}

renderBook = (books) =>(
  books.book ? 
  <div className="br_container">
      <div className="br_header">
          <h2>{books.book.name}</h2>
          <h5>{books.book.author}</h5>
          <div className="br_reviewer">
              <span>Reseña por:</span> {books.reviewer.name} {books.reviewer.lastname}
          </div>
      </div><p></p><p></p><h2>Reseña:</h2>
      <div className="br_review">
          {books.book.review}
      </div>
      <div className="br_box">
          <div className="left">
              <div>
                  <span>Paginas:</span> {books.book.pages}
              </div>
              <div>
                  <span>Precio:</span> {books.book.price}
              </div>
          </div>
          <div className="right">
              <span>Rating</span>
              <div>{books.book.rating}/5</div>
          </div>
      </div>
  </div>
:null
)

  render() {
    let books = this.props.books;
    //console.log('perro' ,this.props)
    return (
      <div>
        {this.renderBook(books)}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books : state.books
  }
}

export default connect(mapStateToProps)(BookView);