import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear2ColumnSelected } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsTableYear2SelectStyled = styled.select`

  margin-top: .5em;
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
const BCKeyPerformanceIndicatorsTableYear2Select = () => {
  
  const year2Column = useSelector(state => state.bcReducers.bcKPIs.bcYear2Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear2 = [...createRange(year2Column.start-5, year2Column.start)
                      , ...createRange(year2Column.start, year2Column.start+6)]

  return <BCKeyPerformanceIndicatorsTableYear2SelectStyled
            onChange={(e) => dispatch(changeYear2ColumnSelected(e.target.value)) }          
          >
            {
              rangeYear2.map(year => {
                  
                    return <option selected={year == year2Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCKeyPerformanceIndicatorsTableYear2SelectStyled>

}

export default BCKeyPerformanceIndicatorsTableYear2Select