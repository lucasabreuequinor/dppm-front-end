import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIIndicator } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsKpiItemIndicatorStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5em;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis;  


  resize: none;
}
`
const BCKeyPerformanceIndicatorsKpiItemIndicator = ({kpi}) => {
  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemIndicatorStyled
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={kpi.indicator}
            onChange={(e) => dispatch(changeKPIIndicator({id: kpi.id, indicator:e.target.value})) }
          />

}

export default BCKeyPerformanceIndicatorsKpiItemIndicator