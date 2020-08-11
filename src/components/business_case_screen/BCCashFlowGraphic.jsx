import React from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList,
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux'


const BCCashFlowGraphic = ({style}) => {
  const jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/'
  
  const kpis = useSelector(state => state.bcReducers.bcKPIs.kpis);
  const baseLineColumn = useSelector(state => state.bcReducers.bcKPIs.bcBaselineColumn.selected)
  const year1LineColumn = useSelector(state => state.bcReducers.bcKPIs.bcYear1Column.selected)
  const year2LineColumn = useSelector(state => state.bcReducers.bcKPIs.bcYear2Column.selected)
  const year3LineColumn = useSelector(state => state.bcReducers.bcKPIs.bcYear3Column.selected)
  const year4LineColumn = useSelector(state => state.bcReducers.bcKPIs.bcYear4Column.selected)
  const year5LineColumn = useSelector(state => state.bcReducers.bcKPIs.bcYear5Column.selected)

  const numberColumns = 6
  const baselineYears = [
    {year: baseLineColumn, name: 'baseline'},
    {year: year1LineColumn, name: 'year1' },
    {year: year2LineColumn, name: 'year2' },
    {year: year3LineColumn, name: 'year3' },
    {year: year4LineColumn, name: 'year4' },
    {year: year5LineColumn, name: 'year5' },
  ]

  const data = [...Array(numberColumns).keys()]
               .map((el,i) =>
                {
            
                  const opexSum = kpis.filter(el => el.impact_type.selected == 'outcome' && el.indicator.selected == 'OPEX').reduce(((acc, curr) => acc + curr[baselineYears[i].name]), 0)
                  const capexSum = kpis.filter(el => el.impact_type.selected == 'outcome' && el.indicator.selected == 'CAPEX').reduce(((acc, curr) => acc + curr[baselineYears[i].name]), 0)
                  const peSum = kpis.filter(el => el.impact_type.selected == 'outcome' && el.indicator.selected == 'PE').reduce(((acc, curr) => acc + curr[baselineYears[i].name]), 0)
                  const mppSum = kpis.filter(el => el.impact_type.selected == 'outcome' && el.indicator.selected == 'MPP').reduce(((acc, curr) => acc + curr[baselineYears[i].name]), 0)

                  return( 
                  {
                    name: baselineYears[i].year,
                    ...(opexSum ? {'OPEX': opexSum}: {}), 
                    ...(capexSum ? {'CAPEX': capexSum}: {}),
                    ...(peSum ? {'PE': peSum}: {}),
                    ...(mppSum ? {'MPP': mppSum}: {})                  
                  })
                })
  return (
    <ResponsiveContainer 
        id='meuuu_containerrrr'
        style={style}
      >
      <BarChart
        data={data}
        // margin={{
        //   top: 20, right: 30, left: 20, bottom: 5,
        // }}
      >
        <XAxis dataKey="name" tick={{fontSize: '.7em',fontWeight:'bold'}}/>
        <Tooltip />
        <Legend />

        <Bar dataKey="OPEX" stackId="a" fill="#333333">
          <LabelList dataKey="OPEX" style={{fill: "#FFFFFF", fontSize:".6em",fontWeight:'bold'}}></LabelList>
        </Bar>

        <Bar dataKey="CAPEX" stackId="a" fill="#7D0023">
          <LabelList dataKey="CAPEX" style={{fill: "#FFFFFF", fontSize:".6em",fontWeight:'bold'}}></LabelList>
        </Bar>

        <Bar dataKey="PE" stackId="a" fill="#007079">
          <LabelList dataKey="PE" style={{fill: "#FFFFFF", fontSize:".6em",fontWeight:'bold'}}></LabelList>
        </Bar>

        <Bar dataKey="MPP" stackId="a" fill="#FFA261">
          <LabelList dataKey="MPP" style={{fill: "#000000", fontSize:".6em",fontWeight:'bold'}}></LabelList>
        </Bar>

      </BarChart>
    </ResponsiveContainer>

  );
}

export default BCCashFlowGraphic