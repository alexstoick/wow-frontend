import React from 'react';
import fetch from 'isomorphic-fetch'


export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    console.log("lol")
    const result = await fetch('http://82.196.11.214:3000/v1/items/110656')
    const json = await result.json();
    this.setState({item: json});
    console.log(json);
  }

  render() {
    if (this.state.item) {
      return (
        <div>
          {this.state.item.BuyPrice}
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
