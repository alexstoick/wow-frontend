import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalBarSeries, VerticalGridLines} from 'react-vis';
import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.lineChartData = []
    this.state.barChartData = []
  }


  async componentDidMount() {
    const result = await fetch('http://82.196.11.214:3000/v1/items/118472/history_price');
    const json = await result.json();

    json.map((data_point,i) => {
      if(i > 2) {
        return
      }
      let newLineChartPoint = this.state.lineChartData;
      newLineChartPoint.push({ x:i, y: data_point["Average"]/10000});

      let newBarCharPoint = this.state.barChartData;
      newBarCharPoint.push({ x:i, y: data_point["Count"]/10000});

      this.setState({lineChartData: newLineChartPoint,barChartData: newBarCharPoint});
    });
  }

  render() {
    if(this.state.barCharData) {
      return (
          "LOADING"
      );
    } else {
      console.log('rendering');
      console.log(this.state.lineChartData);
      let data = [ {x:0, y:10.73219}, {x:2, y:15}]
      console.log(data);
      return (
          <XYPlot width={1000} height={300}>
            <XAxis />
            <YAxis />
            <HorizontalGridLines />
            <VerticalGridLines />
            <LineSeries data={this.state.lineChartData} />

          </XYPlot>
      );
    }
  }
}
