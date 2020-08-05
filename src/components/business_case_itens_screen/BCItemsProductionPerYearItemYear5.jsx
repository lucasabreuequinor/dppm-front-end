import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeProductionItemYear5 } from '../../actions/business_case_items';

const BCItemsProductionPerYearItemYear5Styled = styled.input`


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
const BCItemsProductionPerYearItemYear5 = ({productionItem}) => {
  const dispatch = useDispatch();

  return <BCItemsProductionPerYearItemYear5Styled
            data-html2canvas-ignore
            type="number"
            min="0"
            key={productionItem.id}  
            style={{
                    backgroundColor: productionItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={productionItem.year5}
            onChange={(e) => dispatch(changeProductionItemYear5({id: productionItem.id, year5:parseInt(e.target.value)})) }
          />

}

export default BCItemsProductionPerYearItemYear5