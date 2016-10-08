import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalBarSeries, VerticalGridLines, Crosshair} from 'react-vis';
import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.lineChartData = [];
    this.state.barChartData = [];
    this.state.crosshairValues = [];
    this._crosshairValues = [];

    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onNearestXs = [
      this._onNearestX.bind(this, 0),
      this._onNearestX.bind(this, 1)
    ];
  }

  async componentDidMount() {
    const result = await fetch('https://api.wow.stoica.xyz/v1/items/' + this.props.params.itemId + '/history_price');
    const json = await result.json();
    let lineChartData = [];
    let barChartData = []
    json.map((data_point,i) => {
      lineChartData.push({ x:i, y: data_point["Average"]/10000});
      barChartData.push({ x:i, y: data_point["Count"]});
    });
    console.log("setting state in componentDidMount")
    this.setState({lineChartData, barChartData});
  }


  /**
   * Event handler for onNearestX.
   * @param {number} seriesIndex Index of the series.
   * @param {Object} value Selected value.
   * @private
   */
  _onNearestX(seriesIndex, value) {
    this._crosshairValues = this._crosshairValues.concat();
    this._crosshairValues[seriesIndex] = value;
    console.log("setting state in on _onNearestX")
    this.setState({crosshairValues: this._crosshairValues});
  }

  /**
   * Event handler for onMouseLeave.
   * @private
   */
  _onMouseLeave() {
    this._crosshairValues = [];
    console.log("setting state in on _onMouseLeave")
    this.setState({crosshairValues: this._crosshairValues});
  }

  render() {
    if(this.state.barCharData) {
      return (
          "LOADING"
      );
    } else {
      return (
          <div>
            <XYPlot width={1000} height={300}>
              <XAxis />
              <YAxis />
              <HorizontalGridLines />
              <VerticalGridLines />
              <VerticalBarSeries
                onNearestX={this._onNearestXs[0]}
                data={this.state.barChartData}
              />
              <LineSeries
                onNearestX={this._onNearestXs[1]}
                data={this.state.lineChartData}
              />
              <Crosshair values={this.state.crosshairValues}>
                <p>Amount: {this.state.crosshairValues.length > 0 ? this.state.crosshairValues[0].y : 'xx'}</p>
                <p>Cost: {this.state.crosshairValues.length > 0 ? this.state.crosshairValues[1].y : 'xx'}</p>
              </Crosshair>
            </XYPlot>
            <button className="back" onClick={this.props.history.goBack}>Back</button>
          </div>
      );
    }
  }
}
