import React from 'react';
// import { Link } from 'react-router';
// import item from '../schema';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../reducers/dispute.reducer';

const timeToRead = 5000;

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
    this.props.newDispute();
    if (!$.isEmptyObject(this.props.dispute)) {
      this.setState({ timeToRead: false, hasDispute: true });
      setTimeout(() => {
        this.setState({ timeToRead: true });
      }, timeToRead);
    } else {
      //Has Dispute here should be false but for testing purposes change it
      this.setState({ timeToRead: false, hasDispute: false });
    }
  }
  resolve(ui) {
    this.props.resolveDispute(ui);
    this.newTx();
  }
  render() {
    return (
      <div className="container">
        <div className="card large">
          <center>
            <div className="card-image waves-effect waves-block waves-light" />
            {this.state.hasDispute ? JSON.stringify(this.props.dispute) : (<div><h3>There are no disputes currently! <br /> Please check back later.</h3></div>)}
          </center>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <i className="material-icons right">close</i>
            </span>
          </div>
          <div className="card-action">
          { this.state.hasDispute ?
            (<div><a className={`waves-effect waves-light btn left red hoverable ${this.state.timeToRead ? '' : 'disabled'}`} onClick={() => this.resolve(false)} ><i className="material-icons left">undo</i>Give to Seller</a>
              <a className={`waves-effect waves-light btn right green hoverable ${this.state.timeToRead ? '' : 'disabled'}`} onClick={() => this.resolve(true)}><i className="material-icons right">redo</i>Give to Buyer</a></div>)
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

