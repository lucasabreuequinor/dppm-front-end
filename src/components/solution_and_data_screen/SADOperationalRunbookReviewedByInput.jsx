import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeOperationalRunbookReviewedBy } from '../../actions/solution_and_data';

const SADOperationalRunbookReviewedByInputStyled = styled.select`

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
const SADOperationalRunbookReviewedByInput = () => {
  const operationalRunbookReviewedBy = useSelector(state => state.sadReducers.sadOperationalRunbookReviewedBy);
  const dispatch = useDispatch();

  const [users, setUsers]  = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(window.usersAD);
      console.log(users);
    }, 5000);
  });


  return <SADOperationalRunbookReviewedByInputStyled
            value={operationalRunbookReviewedBy}
            onChange={(e) => dispatch(changeOperationalRunbookReviewedBy(e.target.value)) }
          >

          {
            users.map(user => 
              <option key={user.id} value={user.id}>
                {user.displayName}
              </option>  
            )
          } 

          </SADOperationalRunbookReviewedByInputStyled>

}

export default SADOperationalRunbookReviewedByInput
