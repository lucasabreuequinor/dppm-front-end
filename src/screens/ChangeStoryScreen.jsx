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
  CHStyledNextLinkContainer,
  CHStyledNextLink
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
            <CHStyledNextLinkContainer>
              <CHStyledNextLink to="/"> Next </CHStyledNextLink>
            </CHStyledNextLinkContainer>

          </CHFormAndLabelContainer>
  
        </CHMainContainer>

        {/* <CPMainContainer>
          <CPFormContainer>
            <CPForm>
              <CPLabelField>Project Name</CPLabelField>
              <CPInputField></CPInputField>
              
              <CPLabelField>Project Leader</CPLabelField>
              <CPSelectField>

              </CPSelectField>

              <CPLabelField>Digital Programme</CPLabelField>
              <CPSelectField>

              </CPSelectField>

              <CPLabelField>Approver</CPLabelField>
              <CPSelectField>

              </CPSelectField>

              <CPLabelField>Link to SIP</CPLabelField>
              <CPInputField></CPInputField>

              <CPLabelField>DG</CPLabelField>
              <CPSelectField>

              </CPSelectField>
              <CPButtonContainer>
                <CPButtonNext>Next</CPButtonNext>
              </CPButtonContainer>

            </CPForm>
          </CPFormContainer>
        </CPMainContainer> */}
      </React.Fragment>
      
      )
  }

}


export default ChangeStoryScreen