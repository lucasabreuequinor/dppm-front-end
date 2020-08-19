import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeYear1ColumnSelected } from '../../actions/business_case_items';

const BCItemsCostSavingNetProdTotalTableYear1SelectStyled = styled.select`

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
const BCItemsCostSavingNetProdTotalTableYear1Select = ({className}) => {
  
  const year1Column = useSelector(state => state.bciReducers.bciItems.bciYear1Column)
  const dispatch = useDispatch();

  const createRange = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start); 
  const rangeYear1 = [...createRange(year1Column.start-5, year1Column.start)
                      , ...createRange(year1Column.start, year1Column.start+6)]

  return <BCItemsCostSavingNetProdTotalTableYear1SelectStyled
            onChange={(e) => dispatch(changeYear1ColumnSelected(e.target.value)) }  
            className={className}        
          >
            {
              rangeYear1.map(year => {
                  
                    return <option className={className} selected={year == year1Column.selected ? true : false} 
                                   value={year}>
                                   {year}
                           </option> 
                  }                                
                )
            }
         </BCItemsCostSavingNetProdTotalTableYear1SelectStyled>

}

export default BCItemsCostSavingNetProdTotalTableYear1Select