import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsNetPerYearYear3TotalStyled = styled.input`


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
const BCItemsNetPerYearYear3Total = () => {

  const dispatch = useDispatch();

  const savingItems  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  const savingItemsYear3Total = savingItems.reduce((sum, currItem) => sum + (currItem.year3 ? parseFloat(currItem.year3): 0), 0)

  const costItems  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  const costItemsYear3Total = costItems.reduce((sum, currItem) => sum + (currItem.year3 ? parseFloat(currItem.year3): 0), 0)

  const netPerYearYear3Total = savingItemsYear3Total - costItemsYear3Total

  return <BCItemsNetPerYearYear3TotalStyled
            type="number"
            min="0"
            readOnly
            value={ (savingItems.length || costItems.length) ? netPerYearYear3Total: ""}

          />

}

export default BCItemsNetPerYearYear3Total