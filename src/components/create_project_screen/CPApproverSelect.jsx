import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeApprover } from '../../actions/create_project';

const CPApproverSelectStyled = styled.select`

  border: 1px solid #707070;
  width: 100%;
  padding-top: .5rem;
  padding: .5rem; 
  border-radius: .2rem;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;
  padding-left : 10px;
  padding-right: 10px;
  box-sizing: border-box;

`

const CPApproverSelect = () => {
  const approver = useSelector(state => state.cpReducers.cpApprover);
  const dispatch = useDispatch();

  const [users, setUsers]  = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(window.usersAD);
      console.log(users);
    }, 5000);
  });


  return <CPApproverSelectStyled 
            value={approver}
            onChange={(e) => dispatch(changeApprover(e.target.value)) }
          >

          {
            users.map(user => 
              <option key={user.id} value={user.id}>
                {user.displayName}
              </option>  
            )
          } 

          </CPApproverSelectStyled>
}

export default CPApproverSelect



/*
    TEMPORARIAMENTE ESSE COMPONENTE VAI SER UM INPUT (ACIMA ^^)
    Na fase do backend esse campo vai voltar a ser um DropDown
*/
//import styled from 'styled-components'

// const CPApproverSelect = styled.select`

//   border: 1px solid #707070;
//   width: 100%;
//   padding: .5rem;
//   border-radius: .2rem;
//   font-weight: 500;
//   font-family: inherit;
//   color: #4d4c4c;


// `
// export default CPApproverSelect
