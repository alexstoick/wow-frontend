import React from 'react';
import fetch from 'isomorphic-fetch'
import Craft from './craft.js'
import Item from './item.js'


export default class ItemSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    if(this.props.item) {
      this.setState({summary: this.props.item})
    } else {
      const result = await fetch('http://82.196.11.214:3000/v1/items/' + this.props.params.itemId)
        const json = await result.json();
      this.setState({summary: json});
      console.log(json);
    }
  }

  render() {
    console.log(this.state.summary)
    if (this.state.summary) {
      return (
        <div>
          <Item
          item={this.state.summary.Item}
          buy_price={this.state.summary.BuyPrice}
          />
          <br/>
          {this.state.summary.Crafts.map(
            function(craft,i) {
              return <Craft craft={craft}/>
            })
          }
        </div>
      );
    } else {
      return (
        <div>
          LOADING
        </div>
      );
    }
  }
}
