import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeActivity } from '../../actions/project_plan';

const PPProjectPlanActivityStyled = styled.input`


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
const PPProjectPlanActivity = ({projectPlan}) => {
  const dispatch = useDispatch();

  return <PPProjectPlanActivityStyled
            type="text"
            key={projectPlan.id}
            style={{
                    backgroundColor: projectPlan.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={projectPlan.activity}
            onChange={(e) => dispatch(changeActivity({id: projectPlan.id, activity:e.target.value})) }
            />

}

export default PPProjectPlanActivity

