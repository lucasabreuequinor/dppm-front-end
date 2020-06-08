import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsProductionPerYearYear4TotalStyled = styled.input`


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
const BCItemsProductionPerYearYear4Total = () => {

  const dispatch = useDispatch();

  const productionItemsYear4Total  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)
                                   .reduce((sum, currItem) => sum + (currItem.year4 ? parseFloat(currItem.year4): 0), 0)

  return <BCItemsProductionPerYearYear4TotalStyled
            type="number"
            min="0"
            readOnly
            value={productionItemsYear4Total ? productionItemsYear4Total: ""}
          />

}

export default BCItemsProductionPerYearYear4Total