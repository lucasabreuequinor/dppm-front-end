import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsTotalPerYearYear3TotalStyled = styled.input`


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
const BCItemsTotalPerYearYear3Total = () => {

  const dispatch = useDispatch();

  const savingItems  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  const savingItemsYear3Total = savingItems.reduce((sum, currItem) => sum + (currItem.year3 ? parseFloat(currItem.year3): 0), 0)

  const costItems  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  const costItemsYear3Total = costItems.reduce((sum, currItem) => sum + (currItem.year3 ? parseFloat(currItem.year3): 0), 0)

  const productionItems  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)

  const productionItemsYear3Total = productionItems.reduce((sum, currItem) => sum + (currItem.year3 ? parseFloat(currItem.year3): 0), 0)

  const totalPerYearYear3Total = savingItemsYear3Total - costItemsYear3Total + productionItemsYear3Total

  return <BCItemsTotalPerYearYear3TotalStyled
            type="number"
            min="0"
            readOnly
            value={ (savingItems.length || costItems.length || productionItems.length) ? totalPerYearYear3Total: ""}

          />

}

export default BCItemsTotalPerYearYear3Total