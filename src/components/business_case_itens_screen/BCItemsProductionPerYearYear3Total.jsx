import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsProductionPerYearYear3TotalStyled = styled.input`


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
const BCItemsProductionPerYearYear3Total = () => {

  const dispatch = useDispatch();

  const productionItemsYear3Total  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)
                                   .reduce((sum, currItem) => sum + (currItem.year3 ? parseFloat(currItem.year3): 0), 0)

  return <BCItemsProductionPerYearYear3TotalStyled
            type="number"
            min="0"
            readOnly
            value={productionItemsYear3Total ? productionItemsYear3Total: ""}
          />

}

export default BCItemsProductionPerYearYear3Total