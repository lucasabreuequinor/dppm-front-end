import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeEnd } from '../../actions/project_plan';

const PPProjectPlanEndStyled = styled.input`


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
const PPProjectPlanEnd = ({projectPlan}) => {
  const dispatch = useDispatch();

  return <PPProjectPlanEndStyled
            type="text"
            key={projectPlan.id}
            style={{
                    backgroundColor: projectPlan.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={projectPlan.end}
            onChange={(e) => dispatch(changeEnd({id: projectPlan.id, end:e.target.value})) }
            />

}

export default PPProjectPlanEnd

