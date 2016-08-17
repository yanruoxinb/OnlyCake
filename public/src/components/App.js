import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import Logo from './Logo';
import CakeList from '../container/CakeList';

class App extends Component {
  render() {
    return (
        <div>
         <Logo/>
          <CakeList/>
        </div>
    );
  }
}

export default App;
