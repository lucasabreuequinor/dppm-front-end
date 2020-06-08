import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsTotalPerYearYear5TotalStyled = styled.input`


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
const BCItemsTotalPerYearYear5Total = () => {

  const dispatch = useDispatch();

  const savingItems  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  const savingItemsYear5Total = savingItems.reduce((sum, currItem) => sum + (currItem.year5 ? parseFloat(currItem.year5): 0), 0)

  const costItems  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  const costItemsYear5Total = costItems.reduce((sum, currItem) => sum + (currItem.year5 ? parseFloat(currItem.year5): 0), 0)

  const productionItems  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)

  const productionItemsYear5Total = productionItems.reduce((sum, currItem) => sum + (currItem.year5 ? parseFloat(currItem.year5): 0), 0)

  const totalPerYearYear5Total = savingItemsYear5Total - costItemsYear5Total + productionItemsYear5Total

  return <BCItemsTotalPerYearYear5TotalStyled
            type="number"
            min="0"
            readOnly
            value={ (savingItems.length || costItems.length || productionItems.length) ? totalPerYearYear5Total: ""}

          />

}

export default BCItemsTotalPerYearYear5Total