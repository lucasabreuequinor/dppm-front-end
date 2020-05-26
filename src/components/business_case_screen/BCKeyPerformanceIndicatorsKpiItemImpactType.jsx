import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIImpactType } from '../../actions/business_case';


const BCKeyPerformanceIndicatorsKpiItemImpactTypeStyled = styled.input`


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
const BCKeyPerformanceIndicatorsKpiItemImpactType = ({kpi}) => {
  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemImpactTypeStyled
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={kpi.impact_type}
            onChange={(e) => dispatch(changeKPIImpactType({id: kpi.id,impact_type:e.target.value})) }
          />

}

export default BCKeyPerformanceIndicatorsKpiItemImpactType