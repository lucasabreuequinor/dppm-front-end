import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeName } from '../../actions/resource_plan';

const RPResourceItemNameStyled = styled.input`


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
const RPResourceItemName = ({resource}) => {
  const dispatch = useDispatch();

  return <RPResourceItemNameStyled
            type="text"
            key={resource.id}
            style={{
                    backgroundColor: resource.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={resource.name}
            onChange={(e) => dispatch(changeName({id: resource.id, name:e.target.value})) }
            />

}

export default RPResourceItemName

