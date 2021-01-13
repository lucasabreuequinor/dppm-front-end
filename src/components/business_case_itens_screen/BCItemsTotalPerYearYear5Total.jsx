import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsTotalPerYearYear5TotalStyled = styled.input`


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
const BCItemsTotalPerYearYear5Total = () => {

  const dispatch = useDispatch();

  const savingItems  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  const savingItemsYear5Total = savingItems.reduce((sum, currItem) => sum + (currItem.year5 ? parseFloat(currItem.year5): 0), 0)

  const costItems  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  const costItemsYear5Total = costItems.reduce((sum, currItem) => sum + (currItem.year5 ? parseFloat(currItem.year5): 0), 0)

  const totalPerYearYear5Total = parseFloat(savingItemsYear5Total - costItemsYear5Total).toFixed(2)

  return <BCItemsTotalPerYearYear5TotalStyled
            type="number"
            step="any"
            readOnly
            value={ (savingItems.length || costItems.length) ? totalPerYearYear5Total: ""}

          />

}

export default BCItemsTotalPerYearYear5Total