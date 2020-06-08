import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeProductionItemAssumptionsComments } from '../../actions/business_case_items';

const BCItemsProductionPerYearItemAssumptionsCommentsStyled = styled.input`


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
const BCItemsProductionPerYearItemAssumptionsComments = ({productionItem}) => {
  const dispatch = useDispatch();

  return <BCItemsProductionPerYearItemAssumptionsCommentsStyled
            type="text"
            key={productionItem.id}
            style={{
                    backgroundColor: productionItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={productionItem.assumptionsComments}
            onChange={(e) => dispatch(changeProductionItemAssumptionsComments({id: productionItem.id, assumptionsComments:e.target.value})) }
            />

}

export default BCItemsProductionPerYearItemAssumptionsComments

