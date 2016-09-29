import React from 'react';
import { Link } from 'react-router';
import item from '../schema';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, disputeReducer } from '../reducers/dispute.reducer';

const timeToRead = 2000;
class DisputeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timeToRead: false
    };
  }
  componentWillMount() {
    this.props.newDispute();
  }
  newTx() {
    this.props.newDispute();
    this.setState({timeToRead: false});
    setTimeout(() => {
      this.setState({timeToRead: true});
    }, timeToRead);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({timeToRead: true});
    }, timeToRead);
  }
  resolve(ui){
    this.props.resolveDispute(ui, this.props.dispute);
    this.newTx();
  }
  render() {
    return (
      <div className="container">
        <div className="card large">
          <center>
            <div className="card-image waves-effect waves-block waves-light" />
          </center>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <i className="material-icons right">close</i>
            </span>
          </div>
          <div className="card-action">
            <a className={`waves-effect waves-light btn left red hoverable ${this.state.timeToRead ? '' : 'disabled'}`} onClick={()=>this.resolve(false)} ><i className="material-icons left">undo</i>Give to Seller</a>
            <a className={`waves-effect waves-light btn right green hoverable ${this.state.timeToRead ? '' : 'disabled'}`} onClick={()=>this.resolve(true)}><i className="material-icons right">redo</i>Give to Buyer</a>
          </div>
        </div>
      </div>
    );
  }
}


DisputeContainer.propTypes = {
  dispute: item
};

const Dispute = connect(mapStateToProps, mapDispatchToProps)(DisputeContainer);


export { Dispute, DisputeContainer, disputeReducer };



