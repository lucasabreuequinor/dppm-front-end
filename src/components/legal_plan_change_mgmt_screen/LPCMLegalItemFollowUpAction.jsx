import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeLegalItemFollowUpAction } from '../../actions/legal_plan_change_mgmt';

const LPCMLegalItemFollowUpActionStyled = styled.input`


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
const LPCMLegalItemFollowUpAction = ({legal}) => {
  const dispatch = useDispatch();

  return <LPCMLegalItemFollowUpActionStyled
            type="text"
            key={legal.id}
            style={{
                    backgroundColor: legal.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={legal.follow_up_action}
            onChange={(e) => dispatch(changeLegalItemFollowUpAction({id: legal.id, follow_up_action:e.target.value})) }
            />

}

export default LPCMLegalItemFollowUpAction

