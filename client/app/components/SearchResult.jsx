import React from 'react';
import { Link } from 'react-router';
import item from '../schema';


// TODO: I can't get the default value for images working.


class SearchResult extends React.Component {
  componentDidMount() {
    $('.carousel.carousel-slider').carousel({ full_width: true });
    $(`.left${this.props.product.id}`).on('click', (e) => {
      $(`.carousel${this.props.product.id}`).carousel('prev');
    });
    $(`.right${this.props.product.id}`).on('click', (e) => {
      $(`.carousel${this.props.product.id}`).carousel('next');
    });
  }
  // We map the items where the a tags are
  render() {
    return (
      <div className="card col s12 m4 l3 sticky-action">
        <div className="card-image waves-effect waves-block waves-light">
          <div className={`carousel carousel-slider carousel${this.props.product.id}`} data-indicators="true">
            <div className="carousel-fixed-item center">
              <a className={`left${this.props.product.id}`}><i className="material-icons left">keyboard_arrow_left</i></a>
              <a className={`right${this.props.product.id}`}><i className="material-icons right">keyboard_arrow_right</i></a>
            </div>
            <a className="carousel-item">
            <img
              role="presentation"
              className="activator"
              src="https://static.pexels.com/photos/131259/pexels-photo-131259-large.jpeg"
            />
            </a>
            <a className="carousel-item">
            <img
              role="presentation"
              className="activator"
              src="https://media3.giphy.com/media/mDEWYG76hRNV6/200_s.gif"
            />
            </a>
          </div>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {`${this.props.product.title.substr(0, 12)}...`}
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-action">
          <Link className="collection-item" to={`/product/${this.props.product.id}`}>
            Go To Product!
          </Link>
          <div className="chip">
            {`${this.props.product.category[0].split('-')[0].trim()} - ${this.props.product.price}`}
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {this.props.product.title}
            <i className="material-icons right">close</i></span>
          <p>
            {this.props.product.description}
          </p>
        </div>
      </div>
    );
  }
}


SearchResult.propTypes = {
  product: item
};


export default SearchResult;
