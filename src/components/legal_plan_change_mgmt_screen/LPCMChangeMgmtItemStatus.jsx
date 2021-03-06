import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeChangeMgmtItemStatus } from '../../actions/legal_plan_change_mgmt';

const LPCMChangeMgmtItemStatusStyled = styled.input`


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
const LPCMChangeMgmtItemStatus = ({changeMgmt}) => {
  const dispatch = useDispatch();

  return <LPCMChangeMgmtItemStatusStyled
            type="text"
            key={changeMgmt.id}
            style={{
                    backgroundColor: changeMgmt.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={changeMgmt.status}
            onChange={(e) => dispatch(changeChangeMgmtItemStatus({id: changeMgmt.id, status:e.target.value})) }
            />

}

export default LPCMChangeMgmtItemStatus

