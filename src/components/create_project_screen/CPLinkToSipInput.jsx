import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeLinkToSip } from '../../actions/create_project';

const CPLinkToSipInputStyled = styled.input`

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

const CPLinkToSipInput = () => {
  const linkToSip = useSelector(state => state.cpReducers.cpLinkToSip);
  const dispatch = useDispatch();

  return <CPLinkToSipInputStyled 
            value={linkToSip}
            onChange={(e) => dispatch(changeLinkToSip(e.target.value)) }
          />

}

export default CPLinkToSipInput


