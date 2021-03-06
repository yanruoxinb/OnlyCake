/**
 * Created by jae on 16-8-14.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class CakeItem extends Component {
  render() {
    let {name, image}= this.props;
    return (
        <div class="row">
          <div className="text-center col-xs-6 col-md-3">
            <a href="#" className="text-center thumbnail">
              <img src={image} title='' height="220"  width="220"/>
            </a>
            <div>{name}</div>
          </div>
        </div>
    );
  }
}
export default CakeItem;
