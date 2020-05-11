import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList,
} from 'recharts';


let baseline = String(new Date().getFullYear())
const getYear = () => {return baseline++}

const data = [
  {
    name: baseline, PE: 0, MPP: 0,
  },
  {
    name: getYear(), PE: 40, MPP: 80,
  },
  {
    name: getYear(), PE: 100, MPP: 200,
  },
  {
    name: getYear(), PE: 150, MPP: 300,
  },
  {
    name: getYear(), PE: 200, MPP: 310,
  },
  {
    name: getYear(), PE: 270, MPP: 350,
  },
  {
    name: getYear(), PE: 300, MPP: 370,
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <ResponsiveContainer>
        <BarChart
          data={data}
          // margin={{
          //   top: 20, right: 30, left: 20, bottom: 5,
          // }}
        >
          <XAxis dataKey="name" tick={{fontSize: '.7em'}}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="PE" stackId="a" fill="#007079">
            <LabelList dataKey="PE" style={{fill: "#FFFFFF", fontSize:".7em"}}></LabelList>
          </Bar>
          <Bar dataKey="MPP" stackId="a" fill="#ffd6fb">
            <LabelList dataKey="PE" style={{fill: "#000000", fontSize:".7em"}}></LabelList>
          </Bar>
        </BarChart>
      </ResponsiveContainer>

    );
  }
}
