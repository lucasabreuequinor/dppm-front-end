import React, { useState, useEffect } from 'react';
import { adalApiFetch } from '../../adalConfig';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeProjectLeader } from '../../actions/create_project';

const CPProjectLeaderSelectStyled = styled.select`

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

const CPProjectLeaderSelect = () => {
  const projectLeader = useSelector(state => state.cpReducers.cpLeader);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([])

  useEffect(() => {
    adalApiFetch(fetch, 'https://graph.microsoft.com/v1.0/users', {})
      .then((response) => {
        response.json()
          .then((responseJson) => {
            setUsers(responseJson.value)
            console.log(responseJson)
          });
      })
  }, []);

  return <CPProjectLeaderSelectStyled
            value={projectLeader}
            onChange={(e) => dispatch(changeProjectLeader(e.target.value)) }  
          >

          {
            users.map(user => 
              <option key={user.id} value={user.id}>
                {user.displayName}
              </option>  
            )
          }       

        </CPProjectLeaderSelectStyled>

}

export default CPProjectLeaderSelect



/*
    TEMPORARIAMENTE ESSE COMPONENTE VAI SER UM INPUT (ACIMA ^^)
    Na fase do backend esse campo vai voltar a ser um DropDown
*/
//import styled from 'styled-components'

// const CPProjectLeaderSelect = styled.select`

//   border: 1px solid #707070;
//   width: 100%;
//   padding: .5rem;
//   border-radius: .2rem;
//   font-weight: 500;
//   font-family: inherit;
//   color: #4d4c4c;


// `
// export default CPProjectLeaderSelect
