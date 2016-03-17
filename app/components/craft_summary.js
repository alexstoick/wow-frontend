import React from 'react';
import fetch from 'isomorphic-fetch'
import CraftItem from './craft_item.js'


export default class CraftSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    console.log("lol")
    itemId = this.props.itemId || this.props.params.itemId
    const result = await fetch('http://82.196.11.214:3000/v1/items/' + this.props.params.itemId + '/crafts')
    const json = await result.json();
    this.setState({summary: json});
    console.log(json);
  }

  render() {
    if (this.state.summary) {
      return (
        <div>
          {this.state.summary.map(
            function(craft, i) {
              return (
                <div>
                  Name: {craft.SpellName}<br/>
                  Profession: {craft.Profession}
                  <br/> <br/>
                  {craft.Items.map(
                      function(item,i) {
                        return <CraftItem
                          item={item}
                        />
                      })
                  }
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
