import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear5ColumnSelected } from '../../actions/business_case_items';

const BCItemsCostSavingNetProdTotalTableYear5SelectStyled = styled.select`

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
const BCItemsCostSavingNetProdTotalTableYear5Select = () => {
  
  const year5Column = useSelector(state => state.bciReducers.bciItems.bciYear5Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear5 = [...createRange(year5Column.start-5, year5Column.start)
                      , ...createRange(year5Column.start, year5Column.start+6)]

  return <BCItemsCostSavingNetProdTotalTableYear5SelectStyled
            onChange={(e) => dispatch(changeYear5ColumnSelected(e.target.value)) }          
          >
            {
              rangeYear5.map(year => {
                  
                    return <option selected={year == year5Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCItemsCostSavingNetProdTotalTableYear5SelectStyled>

}

export default BCItemsCostSavingNetProdTotalTableYear5Select