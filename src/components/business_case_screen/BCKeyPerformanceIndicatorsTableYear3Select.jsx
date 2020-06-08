import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear3ColumnSelected } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsTableYear3SelectStyled = styled.select`

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
const BCKeyPerformanceIndicatorsTableYear3Select = () => {
  
  const year3Column = useSelector(state => state.bcReducers.bcKPIs.bcYear3Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear3 = [...createRange(year3Column.start-5, year3Column.start)
                      , ...createRange(year3Column.start, year3Column.start+6)]

  return <BCKeyPerformanceIndicatorsTableYear3SelectStyled
            onChange={(e) => dispatch(changeYear3ColumnSelected(e.target.value)) }          
          >
            {
              rangeYear3.map(year => {
                  
                    return <option selected={year == year3Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCKeyPerformanceIndicatorsTableYear3SelectStyled>

}

export default BCKeyPerformanceIndicatorsTableYear3Select