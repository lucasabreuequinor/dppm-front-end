import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeProductionItemTotal } from '../../actions/business_case_items';

const BCItemsProductionPerYearItemTotalStyled = styled.input`


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
const BCItemsProductionPerYearItemTotal = ({productionItem}) => {

  const dispatch = useDispatch();

  const currentProductionItem = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems)
                            .filter(currentItem  => currentItem.id  == productionItem.id )[0]
                        
  const currentProductionItemNewTotal = Object.keys(currentProductionItem)
                                          .filter(key => {
                                              return (
                                                  key!='id' && 
                                                  key!='item' && 
                                                  key!='production_type' &&
                                                  key!='total' &&
                                                  key!='assumptionsComments'
                                                )
                                              }  
                                            )
                                          .reduce((sum,key) => sum + (currentProductionItem[key] ? parseFloat(currentProductionItem[key]): 0) , 0)

  return <BCItemsProductionPerYearItemTotalStyled
            type="number"
            min="0"
            key={productionItem.id}  
            readOnly
            style={{
                    backgroundColor: productionItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={currentProductionItemNewTotal}
            // onChange={(e) => dispatch(changeProductionItemTotal({id: productionItem.id, total:parseInt(e.target.value ? e.target.value: 0)})) }
          />

}

export default BCItemsProductionPerYearItemTotal