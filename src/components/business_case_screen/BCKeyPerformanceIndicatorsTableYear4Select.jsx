import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear4ColumnSelected } from '../../actions/business_case';

const BCKeyPerformanceIndicatorsTableYear4SelectStyled = styled.select`

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
const BCKeyPerformanceIndicatorsTableYear4Select = () => {
  
  const year4Column = useSelector(state => state.bcReducers.bcKPIs.bcYear4Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear4 = [...createRange(year4Column.start-5, year4Column.start)
                      , ...createRange(year4Column.start, year4Column.start+6)]

  return <BCKeyPerformanceIndicatorsTableYear4SelectStyled
            onChange={(e) => dispatch(changeYear4ColumnSelected(e.target.value)) }          
          >
            {
              rangeYear4.map(year => {
                  
                    return <option selected={year == year4Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCKeyPerformanceIndicatorsTableYear4SelectStyled>

}

export default BCKeyPerformanceIndicatorsTableYear4Select