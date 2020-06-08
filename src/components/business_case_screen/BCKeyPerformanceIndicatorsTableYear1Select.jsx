import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear1ColumnSelected } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsTableYear1SelectStyled = styled.select`

  margin-top: .5rem;
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
const BCKeyPerformanceIndicatorsTableYear1Select = () => {
  
  const year1Column = useSelector(state => state.bcReducers.bcKPIs.bcYear1Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear1 = [...createRange(year1Column.start-5, year1Column.start)
                      , ...createRange(year1Column.start, year1Column.start+6)]

  return <BCKeyPerformanceIndicatorsTableYear1SelectStyled
            onChange={(e) => dispatch(changeYear1ColumnSelected(e.target.value)) }          
          >
            {
              rangeYear1.map(year => {
                  
                    return <option selected={year == year1Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCKeyPerformanceIndicatorsTableYear1SelectStyled>

}

export default BCKeyPerformanceIndicatorsTableYear1Select