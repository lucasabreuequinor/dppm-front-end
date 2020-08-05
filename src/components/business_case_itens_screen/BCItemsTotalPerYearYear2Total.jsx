import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsTotalPerYearYear2TotalStyled = styled.input`


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
const BCItemsTotalPerYearYear2Total = () => {

  const dispatch = useDispatch();

  const savingItems  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  const savingItemsYear2Total = savingItems.reduce((sum, currItem) => sum + (currItem.year2 ? parseFloat(currItem.year2): 0), 0)

  const costItems  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  const costItemsYear2Total = costItems.reduce((sum, currItem) => sum + (currItem.year2 ? parseFloat(currItem.year2): 0), 0)

  const productionItems  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)

  const productionItemsYear2Total = productionItems.reduce((sum, currItem) => sum + (currItem.year2 ? parseFloat(currItem.year2): 0), 0)

  const totalPerYearYear2Total = savingItemsYear2Total - costItemsYear2Total + productionItemsYear2Total

  return <BCItemsTotalPerYearYear2TotalStyled
            type="number"
            min="0"
            readOnly
            value={ (savingItems.length || costItems.length || productionItems.length) ? totalPerYearYear2Total: ""}

          />

}

export default BCItemsTotalPerYearYear2Total