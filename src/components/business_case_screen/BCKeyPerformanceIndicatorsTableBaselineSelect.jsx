import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeBaselineColumnSelected } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsTableBaselineSelectStyled = styled.select`

  border: 1px solid #707070;
  margin-top: .5rem;

  font-family: inherit;
  color: #4d4c4c;

  border: none;
  font-family: inherit;
  
  &:active {
    border: none;
  }
  
  &:focus {
    outline: none;
  }  
  
  } 


`
const BCKeyPerformanceIndicatorsTableBaselineSelect = () => {
  
  const baselineColumn = useSelector(state => state.bcReducers.bcKPIs.bcBaselineColumn)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeBaseline = [...createRange(baselineColumn.start-5, baselineColumn.start)
                      , ...createRange(baselineColumn.start, baselineColumn.start+6)]

  return <BCKeyPerformanceIndicatorsTableBaselineSelectStyled
            onChange={(e) => dispatch(changeBaselineColumnSelected(e.target.value)) }          
          >
            {
              rangeBaseline.map(year => {
                  
                    return <option selected={year == baselineColumn.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCKeyPerformanceIndicatorsTableBaselineSelectStyled>

}

export default BCKeyPerformanceIndicatorsTableBaselineSelect