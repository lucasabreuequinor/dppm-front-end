import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeProductionItemProductionType } from '../../actions/business_case_items';

const BCItemsProductionPerYearItemTypeStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis;  

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  resize: none;
}
`
const BCItemsProductionPerYearItemType = ({productionItem, className}) => {
  const dispatch = useDispatch();

  return <BCItemsProductionPerYearItemTypeStyled
            className={className}
            type="text"
            key={productionItem.id}
            style={{
                    backgroundColor: productionItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={productionItem.production_type}
            onChange={(e) => dispatch(changeProductionItemProductionType({id: productionItem.id, production_type:e.target.value})) }
            />

}

export default BCItemsProductionPerYearItemType

