import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIYear5 } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsKpiItemYear5Styled = styled.input`


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
const BCKeyPerformanceIndicatorsKpiItemYear5 = ({kpi}) => {
  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemYear5Styled
            type="number"
            key={kpi.id}
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={kpi.year5}
            onChange={(e) => dispatch(changeKPIYear5({id: kpi.id, year5:parseFloat(e.target.value)})) }
            />

}

export default BCKeyPerformanceIndicatorsKpiItemYear5