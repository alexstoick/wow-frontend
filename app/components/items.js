import React from 'react';
import fetch from 'isomorphic-fetch';
import CraftItem from './craft_item.js';
import ItemSummary from './item_summary.js';

export default class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.itemIds = [110656, 113264]
    this.state.elements = []
  }

  async componentDidMount() {
    this.state.itemIds.map(async (itemId) => {
    // for(let i=0; i< this.state.itemIds.length; ++i) {
        const result = await fetch('http://82.196.11.214:3000/v1/items/' + itemId)
        const json = await result.json();
        console.log(json);
        let newElements = this.state.elements;
        newElements.push(json);
        this.setState({elements: newElements});
    });
  }

  render() {
    if (this.state.elements) {
      return (
        <div>
          {this.state.elements.map(
            function(element, i) {
              console.log(element);
              return (
                <div>
                  <ItemSummary item={element}/>
                </div>
              )
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
