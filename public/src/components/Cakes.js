/**
 * Created by jae on 16-8-14.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import CakeItem from './CakeItem';
class Cake extends Component {
  render() {
    const {cake}=this.props;
    return (
        <div className="row">
          {
            cake.map((v, k)=> (
                <CakeItem key={k}
                          name={v.name}
                          image={v.image}
                />
            ))
          }
        </div>
    );
  }
}

export default Cake;
