import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsNetPerYearYear2TotalStyled = styled.input`


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
const BCItemsNetPerYearYear2Total = () => {

  const dispatch = useDispatch();

  const savingItems  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  const savingItemsYear2Total = savingItems.reduce((sum, currItem) => sum + (currItem.year2 ? parseFloat(currItem.year2): 0), 0)

  const costItems  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  const costItemsYear2Total = costItems.reduce((sum, currItem) => sum + (currItem.year2 ? parseFloat(currItem.year2): 0), 0)

  const netPerYearYear2Total = savingItemsYear2Total - costItemsYear2Total

  return <BCItemsNetPerYearYear2TotalStyled
            type="number"
            min="0"
            readOnly
            value={ (savingItems.length || costItems.length) ? netPerYearYear2Total: ""}

          />

}

export default BCItemsNetPerYearYear2Total