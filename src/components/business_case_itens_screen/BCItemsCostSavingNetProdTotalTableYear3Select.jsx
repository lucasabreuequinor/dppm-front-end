import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear3ColumnSelected } from '../../actions/business_case_items';

const BCItemsCostSavingNetProdTotalTableYear3SelectStyled = styled.select`

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
const BCItemsCostSavingNetProdTotalTableYear3Select = ({className}) => {
  
  const year3Column = useSelector(state => state.bciReducers.bciItems.bciYear3Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear3 = [...createRange(year3Column.start-5, year3Column.start)
                      , ...createRange(year3Column.start, year3Column.start+6)]

  return <BCItemsCostSavingNetProdTotalTableYear3SelectStyled
            onChange={(e) => dispatch(changeYear3ColumnSelected(e.target.value)) }
            className={className}          
          >
            {
              rangeYear3.map(year => {
                  
                    return <option className={className} selected={year == year3Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCItemsCostSavingNetProdTotalTableYear3SelectStyled>

}

export default BCItemsCostSavingNetProdTotalTableYear3Select