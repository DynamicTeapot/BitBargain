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
	<p> Hello React!</p>
      </div>
    );
  }
};


export default App;
