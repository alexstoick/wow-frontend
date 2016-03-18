import React from 'react';
import Price from './price.js'
var moment = require('moment');

export default class Item extends React.Component {
  render() {
    return (
      <div>
        Item Name: {this.props.item.ItemName}<br/>
        <div style={{float: 'left'}}>Buy Price: </div><Price price={this.props.buy_price}/><br/>
        Updated:
          {
            moment().diff(
                moment(new Date(this.props.updated_at)),
                'minutes'
            ) + ' minutes ago'}
      </div>
    );
  }
}
