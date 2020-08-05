import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsProductionPerYearBaselineTotalStyled = styled.input`


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
const BCItemsProductionPerYearBaselineTotal = () => {

  const dispatch = useDispatch();

  const productionItemsBaselineTotal  = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)
                                   .reduce((sum, currItem) => sum + (currItem.baseline ? parseFloat(currItem.baseline): 0), 0)

  return <BCItemsProductionPerYearBaselineTotalStyled
            type="number"
            min="0"
            readOnly
            // style={{
            //         backgroundColor: productionItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
            //       }}

            value={productionItemsBaselineTotal ? productionItemsBaselineTotal : ""}
          />

}

export default BCItemsProductionPerYearBaselineTotal