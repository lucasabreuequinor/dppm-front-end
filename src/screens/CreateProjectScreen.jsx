import React from "react";
import {
  CPMainContainer,
  CPFormContainer,
  CPForm,
  CPLabelField,
  CPInputField,
  CPSelectField,
  CPButtonContainer,
  CPStyledNextLink, 
  CPStyledNextLinkContainer}
  from "../components/create_project_screen"


class CreateProjectScreen extends React.Component{


  render(){
    return (
      <React.Fragment>
        <CPMainContainer>
          <CPFormContainer>
            <CPForm>
              <CPLabelField no_margin >Project Name</CPLabelField>
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
              <CPStyledNextLinkContainer>
                <CPStyledNextLink to={process.env.PUBLIC_URL + "/create_project/change_story"} > Next </CPStyledNextLink>
              </CPStyledNextLinkContainer>

            </CPForm>
          </CPFormContainer>
        </CPMainContainer>
      </React.Fragment>
      
      )
  }

}


export default CreateProjectScreen