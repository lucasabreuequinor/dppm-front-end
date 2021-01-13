import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsSavingPerYearYear1TotalStyled = styled.input`


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
const BCItemsSavingPerYearYear1Total = () => {

  const dispatch = useDispatch();

  const savingItemsYear1Total  = parseFloat(useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)
                                   .reduce((sum, currItem) => sum + (currItem.year1 ? parseFloat(currItem.year1): 0), 0)).toFixed(2)

  return <BCItemsSavingPerYearYear1TotalStyled
            type="number"
            step="any"
            readOnly
            value={savingItemsYear1Total ? savingItemsYear1Total: ""}
          />

}

export default BCItemsSavingPerYearYear1Total