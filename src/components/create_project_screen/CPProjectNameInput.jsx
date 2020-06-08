import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeProjectName } from '../../actions/create_project';

const CPProjectNameInputStyled = styled.input`

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

const CPProjectNameInput = () => {
  const projectName = useSelector(state => state.cpReducers.cpName);
  const dispatch = useDispatch();

  return <CPProjectNameInputStyled 
            value={projectName}
            onChange={(e) => dispatch(changeProjectName(e.target.value)) }
          />

}

export default CPProjectNameInput


