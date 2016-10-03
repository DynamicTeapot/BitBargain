import React from 'react';
import item from '../schema';

const SellerProduct = props => (
  <div className="container">
    <div className="row">
        <div className="col s12 m10 l10">
          <div className="card sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <center>
                <div className="carousel carousel-slider">
                  <div className="carousel-fixed-item center">
                    <a className={`leftarrow`}><i className="material-icons large left">keyboard_arrow_left</i></a>
                    <a className={`rightarrow`}><i className="material-icons large right">keyboard_arrow_right</i></a>
                  </div>
                  {props.product.images.map(url => (
                    <div className="carousel-item">
                      <img src={url} role="presentation" className="activator" style={{width: DEFAULT_WIDTH}} />
                    </div>
                  ))}
              </div>
              </center>
            </div>
            <div className="card-content">
              <center><span className="card-title grey-text text-darken-4 activator">
                { props.product.title }
              </span></center>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{props.product.title}<i className="material-icons right">close</i></span>
              <div>
                {props.product.description}<br />
                <div className="divider"></div>
                <h5>{props.product.location }</h5><br />
                { `Submitted on ${(new Date(props.product.created_at)).toLocaleString()}` }<br />
                { `Last Updated ${(new Date(props.product.updated_at)).toLocaleString()}` }<br />
              </div>
            </div>
            <div className="card-action">
              <div className="right-align">
                <a className={`btn-floating btn-large waves-effect waves-light green accent-3 right ${props.loggedIn ? '' : 'disabled'}`} onClick={buy.bind()}><i className="material-icons">mode_edit</i></a>
              </div>
              <div className="chip">
                {props.product.category}
              </div>
              <small>
                <div><center><h4>{ props.product.price }</h4><br /></center></div> 
              </small>
            </div>
          </div>
        </div>
      </div>
  </div>
);

SellerProduct.propTypes = {
  product: item
};

export default SellerProduct;
