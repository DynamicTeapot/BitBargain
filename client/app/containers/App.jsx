import React from 'react';
import NavBar from '../components/NavBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        {
        React.cloneElement(this.props.children)
        }
      </div>
    );
  }
}


export default App;
