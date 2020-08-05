import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsTotalPerYearBaselineTotalStyled = styled.input`


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
const BCItemsTotalPerYearBaselineTotal = () => {

  const dispatch = useDispatch();

  const savingItems  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  const savingItemsBaselineTotal = savingItems.reduce((sum, currItem) => sum + (currItem.baseline ? parseFloat(currItem.baseline): 0), 0)

  const costItems  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  const costItemsBaselineTotal = costItems.reduce((sum, currItem) => sum + (currItem.baseline ? parseFloat(currItem.baseline): 0), 0)

  const productionItems  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)

  const productionItemsBaselineTotal = productionItems.reduce((sum, currItem) => sum + (currItem.baseline ? parseFloat(currItem.baseline): 0), 0)

  const totalPerYearBaselineTotal = savingItemsBaselineTotal - costItemsBaselineTotal + productionItemsBaselineTotal

  return <BCItemsTotalPerYearBaselineTotalStyled
            type="number"
            min="0"
            readOnly
            value={ (savingItems.length || costItems.length || productionItems.length) ? totalPerYearBaselineTotal: ""}

          />

}

export default BCItemsTotalPerYearBaselineTotal