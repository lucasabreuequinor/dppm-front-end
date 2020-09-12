import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsProductionPerYearYear5TotalStyled = styled.input`


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
const BCItemsProductionPerYearYear5Total = () => {

  const dispatch = useDispatch();

  const productionItemsYear5Total  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)
                                   .reduce((sum, currItem) => sum + (currItem.year5 ? parseFloat(currItem.year5): 0), 0)

  return <BCItemsProductionPerYearYear5TotalStyled
            type="number"
            min="0"
            readOnly
            value={productionItemsYear5Total ? productionItemsYear5Total: ""}
          />

}

export default BCItemsProductionPerYearYear5Total