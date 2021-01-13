import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeChangeMgmtItemReviewedApproved } from '../../actions/legal_plan_change_mgmt';

const LPCMChangeMgmtItemReviewedApprovedStyled = styled.select`


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
const LPCMChangeMgmtItemReviewedApproved = ({changeMgmt}) => {
  const dispatch = useDispatch();

  const [users, setUsers]  = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(window.usersAD);
      console.log(users);
    }, 5000);
  });

  return <LPCMChangeMgmtItemReviewedApprovedStyled
            type="text"
            key={changeMgmt.id}
            style={{
                    backgroundColor: changeMgmt.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={changeMgmt.reviewed_approved}
            onChange={(e) => dispatch(changeChangeMgmtItemReviewedApproved({id: changeMgmt.id, reviewed_approved:e.target.value})) }
            >

          {
            users.map(user => 
              <option key={user.id} value={user.id}>
                {user.displayName}
              </option>  
            )
          }   

          </LPCMChangeMgmtItemReviewedApprovedStyled>
          

}

export default LPCMChangeMgmtItemReviewedApproved

