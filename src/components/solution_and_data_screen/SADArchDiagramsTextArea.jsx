import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { changeArchtechtureDiagram } from '../../actions/solution_and_data';


const SADArchDiagramsTextAreaStyled = styled.div`

  border: 1px solid #707070;
  width: 100%;
  // padding-top: .5em;
  // padding: .5em;
  border-radius: .2em;
  // font-weight: 500;
  // font-family: inherit;
  // color: #4d4c4c;
  // padding-left : 10px;
  // padding-right: 10px;
  box-sizing: border-box;
  // background-color: red;
  overflow: hidden;
  margin-top: .8em;
  flex-grow: 1;
  flex-basis:200px;

  @media only screen and (min-width: 1230px){
    flex-basis:400px;
  }

}
`
const SADArchDiagramsTextArea = () => {
  const archtechtureDiagram = useSelector(state => state.sadReducers.sadArchtechtureDiagram);

  return <SADArchDiagramsTextAreaStyled>
            <img 
            style={{
                    objectFit: 'fill',
                    width: '100%',
                    height: '100%'
                  }}
            src={archtechtureDiagram}></img>
            
          </SADArchDiagramsTextAreaStyled>

}

export default SADArchDiagramsTextArea

