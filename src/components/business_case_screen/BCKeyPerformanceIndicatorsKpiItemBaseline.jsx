import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIBaseline } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsKpiItemBaselineStyled = styled.input`


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
const BCKeyPerformanceIndicatorsKpiItemBaseline = ({kpi}) => {
  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemBaselineStyled
            type="number"
            min="0"
            key={kpi.id}
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={kpi.baseline}
            onChange={(e) => dispatch(changeKPIBaseline({id: kpi.id, baseline:parseInt(e.target.value ? e.target.value: 0)})) }
            />

}

export default BCKeyPerformanceIndicatorsKpiItemBaseline

