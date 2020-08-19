import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear2ColumnSelected } from '../../actions/business_case_items';

const BCItemsCostSavingNetProdTotalTableYear2SelectStyled = styled.select`

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
const BCItemsCostSavingNetProdTotalTableYear2Select = ({className}) => {
  
  const year2Column = useSelector(state => state.bciReducers.bciItems.bciYear2Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear2 = [...createRange(year2Column.start-5, year2Column.start)
                      , ...createRange(year2Column.start, year2Column.start+6)]

  return <BCItemsCostSavingNetProdTotalTableYear2SelectStyled
            onChange={(e) => dispatch(changeYear2ColumnSelected(e.target.value)) }
            className={className}          
          >
            {
              rangeYear2.map(year => {
                  
                    return <option className={className} selected={year == year2Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCItemsCostSavingNetProdTotalTableYear2SelectStyled>

}

export default BCItemsCostSavingNetProdTotalTableYear2Select