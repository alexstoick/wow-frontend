import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalBarSeries} from 'react-vis';
import React from 'react';

export default class Graph extends React.Component {
  render() {
    return (
      //<XYPlot
        //width={300}
        //height={300}>
        //<HorizontalGridLines />
        //<XAxis title="X Axis" />
        //<YAxis title="Y Axis" />
        //<LineSeries
          //data={[
            //{x: 1, y: 3},
            //{x: 2, y: 5},
            //{x: 3, y: 15},
            //{x: 4, y: 12}
          //]}/>
        //<LineSeries
          //data={[
            //{x: 1, y: 10},
            //{x: 2, y: 4},
            //{x: 3, y: 2},
            //{x: 4, y: 15}
          //]}/>
      //</XYPlot>
        <XYPlot width={300} height={300}>
          <XAxis />
          <YAxis />
          <HorizontalGridLines />
          <LineSeries data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]} />
          <VerticalBarSeries data={[{x: 1, y: 11}, {x: 2, y: 7}, {x: 3, y: 20}]} />

        </XYPlot>
    );
  }
}
