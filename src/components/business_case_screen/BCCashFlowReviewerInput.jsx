import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeReviewer } from '../../actions/business_case';

const BCCashFlowReviewerInputStyled = styled.select`

  border: 1px solid #707070;
  // width:100%;
  width: 180px;
  padding-top: .5rem;
  padding: .5rem;
  border-radius: .2rem;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;
  padding-left : 10px;
  padding-right: 10px;
  box-sizing: border-box;  

  resize: none;
}
`
const BCCashFlowReviewerInput = () => {
  const reviewer = useSelector(state => state.bcReducers.bcReviewer); 
  const dispatch = useDispatch();

  const [users, setUsers]  = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(window.usersAD);
      console.log(users);
    }, 5000);
  });

  return <BCCashFlowReviewerInputStyled
            value={reviewer}
            onChange={(e) => dispatch(changeReviewer(e.target.value)) }
          >

          {
            users.map(user => 
              <option key={user.id} value={user.id}>
                {user.displayName}
              </option>  
            )
          } 

          </BCCashFlowReviewerInputStyled>

}

export default BCCashFlowReviewerInput
