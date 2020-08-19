import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeCostItemTotal } from '../../actions/business_case_items';

const BCItemsCostPerYearItemTotalStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis;  
  text-align: center;

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  resize: none;
}
`
const BCItemsCostPerYearItemTotal = ({costItem, className}) => {

  const dispatch = useDispatch();

  const currentCostItem = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)
                            .filter(currentItem  => currentItem.id  == costItem.id )[0]
          
  const currentCostItemNewTotal = Object.keys(currentCostItem)
                                          .filter(key => {
                                              return (
                                                  key!='id' && 
                                                  key!='item' && 
                                                  key!='cost_type' &&
                                                  key!='total' &&
                                                  key!='assumptionsComments'
                                                )
                                              }  
                                            )
                                          .reduce((sum,key) => sum + (currentCostItem[key] ? parseFloat(currentCostItem[key]): 0) , 0)

  return <BCItemsCostPerYearItemTotalStyled
            className={className}
            type="number"
            min="0"
            key={costItem.id}  
            readOnly
            style={{
                    backgroundColor: costItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={currentCostItemNewTotal}
          />

}

export default BCItemsCostPerYearItemTotal