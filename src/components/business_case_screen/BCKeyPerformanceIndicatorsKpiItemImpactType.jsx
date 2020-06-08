import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIImpactTypeSelected } from '../../actions/business_case';


const BCKeyPerformanceIndicatorsKpiItemImpactTypeStyled = styled.select`


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

  } 

  resize: none;
}
`
const BCKeyPerformanceIndicatorsKpiItemImpactType = ({kpi}) => {
  const dispatch = useDispatch();
 
  return <BCKeyPerformanceIndicatorsKpiItemImpactTypeStyled
            key={kpi.id}
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}
            onChange={(e) => dispatch(changeKPIImpactTypeSelected({id: kpi.id,selected:e.target.value})) }
          >
            {
              kpi.impact_type.values.map(impact => {
                return (
                <option selected={impact == kpi.impact_type.selected ? true : false}
                        value={impact}>
                        {impact}
                </option>)
              })
            }
          </BCKeyPerformanceIndicatorsKpiItemImpactTypeStyled>

}

export default BCKeyPerformanceIndicatorsKpiItemImpactType