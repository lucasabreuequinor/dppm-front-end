import React from "react";
import {
  CHMainContainer,
  CHFormAndLabelContainer,
  CHFormsContainer,
  CHFromContainer,
  CHFromLabel,
  CHFromTextArea,
  CHByContainer,
  CHByLabel,
  CHByTextArea,
  CHToContainer,
  CHToLabel,
  CHToTextArea,
  CHLabel,
  CHStyledPreviousNextLinkContainer,
  CHStyledNextLink,
  CHStyledPreviousLink
  }
  from "../components/change_story_screen"


class ChangeStoryScreen extends React.Component{

  

  render(){
    return (
      <React.Fragment>
        <CHMainContainer>
          <CHFormAndLabelContainer>

            <CHLabel>Change Story</CHLabel>
            <CHFormsContainer>
              
              <CHFromContainer>
                <CHFromLabel>From:</CHFromLabel>
                <CHFromTextArea></CHFromTextArea>
              </CHFromContainer>

              <CHByContainer>
                <CHByLabel>By:</CHByLabel>
                <CHByTextArea></CHByTextArea>
              </CHByContainer>

              <CHToContainer>
                <CHToLabel>To:</CHToLabel>
                <CHToTextArea></CHToTextArea>
              </CHToContainer>


            </CHFormsContainer>
            <CHStyledPreviousNextLinkContainer>
              <CHStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project"} > Previous </CHStyledPreviousLink>
              <CHStyledNextLink to={process.env.PUBLIC_URL + "/create_project/solution_and_data"} > Next </CHStyledNextLink>
            </CHStyledPreviousNextLinkContainer>

          </CHFormAndLabelContainer>
  
        </CHMainContainer>

      </React.Fragment>
      
      )
  }

}


export default ChangeStoryScreen