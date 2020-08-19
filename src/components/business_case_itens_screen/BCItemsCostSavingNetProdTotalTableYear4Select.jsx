import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear4ColumnSelected } from '../../actions/business_case_items';

const BCItemsCostSavingNetProdTotalTableYear4SelectStyled = styled.select`

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
const BCItemsCostSavingNetProdTotalTableYear4Select = ({className}) => {
  
  const year4Column = useSelector(state => state.bciReducers.bciItems.bciYear4Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear4 = [...createRange(year4Column.start-5, year4Column.start)
                      , ...createRange(year4Column.start, year4Column.start+6)]

  return <BCItemsCostSavingNetProdTotalTableYear4SelectStyled
            onChange={(e) => dispatch(changeYear4ColumnSelected(e.target.value)) }
            className={className}          
          >
            {
              rangeYear4.map(year => {
                  
                    return <option className={className} selected={year == year4Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCItemsCostSavingNetProdTotalTableYear4SelectStyled>

}

export default BCItemsCostSavingNetProdTotalTableYear4Select