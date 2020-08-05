import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsTotalPerYearYear1TotalStyled = styled.input`


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
const BCItemsTotalPerYearYear1Total = () => {

  const dispatch = useDispatch();

  const savingItems  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  const savingItemsYear1Total = savingItems.reduce((sum, currItem) => sum + (currItem.year1 ? parseFloat(currItem.year1): 0), 0)

  const costItems  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  const costItemsYear1Total = costItems.reduce((sum, currItem) => sum + (currItem.year1 ? parseFloat(currItem.year1): 0), 0)

  const productionItems  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)

  const productionItemsYear1Total = productionItems.reduce((sum, currItem) => sum + (currItem.year1 ? parseFloat(currItem.year1): 0), 0)

  const totalPerYearYear1Total = savingItemsYear1Total - costItemsYear1Total + productionItemsYear1Total

  return <BCItemsTotalPerYearYear1TotalStyled
            type="number"
            min="0"
            readOnly
            value={ (savingItems.length || costItems.length || productionItems.length) ? totalPerYearYear1Total: ""}

          />

}

export default BCItemsTotalPerYearYear1Total