import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsSavingPerYearBaselineTotalStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  padding-bottom: 0;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis;  
  text-align: center;
  border-bottom: 0.1rem solid #808080;

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  resize: none;
}
`
const BCItemsSavingPerYearBaselineTotal = () => {

  const dispatch = useDispatch();

  const savingItemsBaselineTotal  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)
                                   .reduce((sum, currItem) => sum + (currItem.baseline ? parseFloat(currItem.baseline): 0), 0)

  return <BCItemsSavingPerYearBaselineTotalStyled
            type="number"
            min="0"
            readOnly
            // style={{
            //         backgroundColor: savingItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
            //       }}

            value={savingItemsBaselineTotal ? savingItemsBaselineTotal : ""}
          />

}

export default BCItemsSavingPerYearBaselineTotal