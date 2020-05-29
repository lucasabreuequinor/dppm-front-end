import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIIndicatorSelected } from '../../actions/business_case';


const BCKeyPerformanceIndicatorsKpiItemIndicatorTypeStyled = styled.select`


  border: 0px solid #707070;
  width:100%;
  padding: .5em;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis;  

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  } 

  resize: none;
}
`
const BCKeyPerformanceIndicatorsKpiItemIndicatorType = ({kpi}) => {

  const impactType = kpi.impact_type
  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemIndicatorTypeStyled
            key={kpi.id}
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}
            onChange={(e) => dispatch(changeKPIIndicatorSelected({id: kpi.id,selected:e.target.value})) }
          >
            {
              kpi.impact_type.selected ? 
                (kpi.impact_type.selected == 'outcome' ? 
                  (kpi.indicator.outcome.values.map(indicator =>
                    <option selected={indicator == kpi.indicator.outcome.selected ? true : false}>
                      {indicator}
                    </option>
                  )) 
                
                :(kpi.impact_type.selected == 'performance' ? 
                  (kpi.indicator.performance.values.map(indicator =>
                    <option selected={indicator == kpi.indicator.performance.selected ? true : false}>
                      {indicator}
                    </option>                        
                    ))
                :(kpi.impact_type.selected == 'progress' ? 
                  (kpi.indicator.progress.values.map(indicator =>
                    <option selected={indicator == kpi.indicator.progress.selected ? true : false}>
                      {indicator}
                    </option>                             
                    )) 
                 : false)
                  ))               
              : false
            }
          </BCKeyPerformanceIndicatorsKpiItemIndicatorTypeStyled>

}

export default BCKeyPerformanceIndicatorsKpiItemIndicatorType

// kpi.indicator.values.map(impact => 
//   <option selected={impact == kpi.impact_type.selected ? true : false}
//           value={impact}>
//           {impact}
//   </option>
//   )