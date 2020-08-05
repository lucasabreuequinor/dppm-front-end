import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeSavingItemAssumptionsComments } from '../../actions/business_case_items';

const BCItemsSavingPerYearItemAssumptionsCommentsStyled = styled.input`


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
const BCItemsSavingPerYearItemAssumptionsComments = ({savingItem}) => {
  const dispatch = useDispatch();

  return <BCItemsSavingPerYearItemAssumptionsCommentsStyled
            data-html2canvas-ignore
            type="text"
            key={savingItem.id}
            style={{
                    backgroundColor: savingItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={savingItem.assumptionsComments}
            onChange={(e) => dispatch(changeSavingItemAssumptionsComments({id: savingItem.id, assumptionsComments:e.target.value})) }
            />

}

export default BCItemsSavingPerYearItemAssumptionsComments

