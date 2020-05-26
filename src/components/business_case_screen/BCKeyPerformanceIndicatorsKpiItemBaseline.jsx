import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIBaseline } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsKpiItemBaselineStyled = styled.input`


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
const BCKeyPerformanceIndicatorsKpiItemBaseline = ({kpi}) => {
  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemBaselineStyled
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={kpi.baseline}
            onChange={(e) => dispatch(changeKPIBaseline({id: kpi.id, baseline:e.target.value})) }
          />

}

export default BCKeyPerformanceIndicatorsKpiItemBaseline