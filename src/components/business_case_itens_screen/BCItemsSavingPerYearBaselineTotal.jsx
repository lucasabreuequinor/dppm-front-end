import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsSavingPerYearBaselineTotalStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  padding-bottom: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
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

  const savingItemsBaselineTotal  = parseFloat(useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)
                                   .reduce((sum, currItem) => sum + (currItem.baseline ? parseFloat(currItem.baseline): 0), 0)).toFixed(2)

  return <BCItemsSavingPerYearBaselineTotalStyled
            type="number"
            readOnly
            step="any"
            // style={{
            //         backgroundColor: savingItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
            //       }}

            value={savingItemsBaselineTotal ? savingItemsBaselineTotal : ""}
          />

}

export default BCItemsSavingPerYearBaselineTotal