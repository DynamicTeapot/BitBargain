import React from 'react';
// import { Link } from 'react-router';
// import item from '../schema';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../reducers/dispute.reducer';

const timeToRead = 3000;

class DisputeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeToRead: false,
      hasDispute: false
    };
  }
  componentWillMount() {
    this.newTx();
  }
  newTx() {
    fetch('/disputes', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(dataStream => dataStream.json())
    .then(resp => {
      this.props.newDispute(resp);
      console.log(this.props);
      if (!$.isEmptyObject(this.props.dispute)) {
        this.setState({ timeToRead: false, hasDispute: true });
        setTimeout(() => {
          this.setState({ timeToRead: true });
        }, timeToRead+200);
      } else {
        // Has Dispute here should be false but for testing purposes changed it to true
        this.setState({ timeToRead: false, hasDispute: false });
      }
    });
  }
  resolve(ui) {
    if(this.state.timeToRead) {
      this.props.resolveDispute(ui);
      this.newTx();
    }
  }
  render() {
    return (
      <div className="container">
        <div className="card large sticky-action">
          <center>
            <div className="card-image waves-effect waves-block waves-light activator">
              {this.props.dispute.images ? this.props.dispute.images.map(url => {
                return (<img src='url'/>)
              }) : '' }
            </div>
            {this.state.hasDispute ? <div className='activator'><h3>{this.props.dispute.title}</h3></div> : (<div><h3>There are no disputes currently! <br /> Please check back later.</h3></div>)}
          </center>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <i className="material-icons right">close</i>
            </span>
          </div>
          <div className="card-action">
          <center><h4>{this.props.dispute.price}</h4></center>
          { this.state.hasDispute ?
            (<div><a className={`waves-effect waves-light btn left red hoverable ${this.state.timeToRead ? '' : 'disabled'}`} onClick={() => {this.resolve(false)}} ><i className="material-icons left">undo</i>Give to Seller</a>
              <a className={`waves-effect waves-light btn right green hoverable ${this.state.timeToRead ? '' : 'disabled'}`} onClick={() => {this.resolve(true)}}><i className="material-icons right">redo</i>Give to Buyer</a></div>)
            :
            (<div>
              <center>
                <a className={'waves-effect waves-light btn right green hoverable'} onClick={() => this.newTx()}><i className="material-icons right">refresh</i>Reload</a>
              </center>
            </div>)
          }
          </div>
        </div>
      </div>
    );
  }
}

const Dispute = connect(mapStateToProps, mapDispatchToProps)(DisputeContainer);


export { Dispute, DisputeContainer };

