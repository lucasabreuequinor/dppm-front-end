import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeKPIIndicatorSelected } from '../../actions/business_case';


const BCKeyPerformanceIndicatorsKpiItemIndicatorTypeStyled = styled.select`


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
const BCKeyPerformanceIndicatorsKpiItemIndicatorType = ({kpi}) => {

  const dispatch = useDispatch();

  return <BCKeyPerformanceIndicatorsKpiItemIndicatorTypeStyled
            key={kpi.id}
            style={{
                    backgroundColor: kpi.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}
            onChange={(e) => dispatch(changeKPIIndicatorSelected({id: kpi.id,selected:e.target.value})) }
          >
            {

                  kpi.indicator.values.map(indicator =>
                    <option selected={indicator == kpi.indicator.selected ? true : false}>
                      {indicator}
                    </option>
                  )
            }
          </BCKeyPerformanceIndicatorsKpiItemIndicatorTypeStyled>

}

export default BCKeyPerformanceIndicatorsKpiItemIndicatorType