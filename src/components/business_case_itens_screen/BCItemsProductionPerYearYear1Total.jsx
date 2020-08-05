import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsProductionPerYearYear1TotalStyled = styled.input`


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
const BCItemsProductionPerYearYear1Total = () => {

  const dispatch = useDispatch();

  const productionItemsYear1Total  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)
                                   .reduce((sum, currItem) => sum + (currItem.year1 ? parseFloat(currItem.year1): 0), 0)

  return <BCItemsProductionPerYearYear1TotalStyled
            type="number"
            min="0"
            readOnly
            value={productionItemsYear1Total ? productionItemsYear1Total: ""}
          />

}

export default BCItemsProductionPerYearYear1Total