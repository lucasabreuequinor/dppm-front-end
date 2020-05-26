import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIYear4 } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsKpiItemYear4Styled = styled.input`


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
const BCKeyPerformanceIndicatorsKpiItemYear4 = ({kpi}) => {
  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemYear4Styled
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={kpi.year4}
            onChange={(e) => dispatch(changeKPIYear4({id: kpi.id, year4:e.target.value})) }
          />

}

export default BCKeyPerformanceIndicatorsKpiItemYear4