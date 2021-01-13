import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsSavingPerYearYear3TotalStyled = styled.input`


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
const BCItemsSavingPerYearYear3Total = () => {

  const dispatch = useDispatch();

  const savingItemsYear3Total  = parseFloat(useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)
                                   .reduce((sum, currItem) => sum + (currItem.year3 ? parseFloat(currItem.year3): 0), 0)).toFixed(2)

  return <BCItemsSavingPerYearYear3TotalStyled
            type="number"
            step="any"
            readOnly
            value={savingItemsYear3Total ? savingItemsYear3Total: ""}
          />

}

export default BCItemsSavingPerYearYear3Total