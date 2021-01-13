import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIYear1 } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsKpiItemYear1Styled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
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

  resize: none;
}
`
const BCKeyPerformanceIndicatorsKpiItemYear1 = ({kpi}) => {
  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemYear1Styled
            type="number"
            key={kpi.id}  
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={kpi.year1}
            onChange={(e) => dispatch(changeKPIYear1({id: kpi.id, year1:parseFloat(e.target.value)})) }

          />

}

export default BCKeyPerformanceIndicatorsKpiItemYear1