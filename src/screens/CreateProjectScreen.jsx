import React from "react";
import {
  CPMainContainer,
  CPFormContainer,
  CPForm,
  CPLabelField,
  CPInputField,
  CPSelectField,
  CPStyledNextLink,
  CPStyledPreviousLink,
  CPStyledPreviousNextLinkContainer,
  CPProjectNameLabel,
  CPProjectNameInput,
  CPProjectLeaderLabel,
  CPProjectLeaderSelect,
  CPDigitalProgrammeLabel,
  CPDigitalProgrammeSelect,
  CPApproverLabel,
  CPApproverSelect,
  CPLinkToSipLabel,
  CPLinkToSipInput,
  CPDGLabel,
  CPDGSelect,
  }

  from "../components/create_project_screen"


class CreateProjectScreen extends React.Component{


  render(){
    return (
      <React.Fragment>
        <CPMainContainer>
          <CPFormContainer>
            <CPForm>
              <CPProjectNameLabel no_margin >Project Name</CPProjectNameLabel>
              <CPProjectNameInput></CPProjectNameInput>
              
              <CPProjectLeaderLabel>Project Leader</CPProjectLeaderLabel>
              <CPProjectLeaderSelect>

              </CPProjectLeaderSelect>

              <CPDigitalProgrammeLabel>Digital Programme</CPDigitalProgrammeLabel>
              <CPDigitalProgrammeSelect>

              </CPDigitalProgrammeSelect>

              <CPApproverLabel>Approver</CPApproverLabel>
              <CPApproverSelect>

              </CPApproverSelect>

              <CPLinkToSipLabel>Link to SIP</CPLinkToSipLabel>
              <CPLinkToSipInput></CPLinkToSipInput>

              <CPDGLabel>DG</CPDGLabel>
              <CPDGSelect>

              </CPDGSelect>
              <CPStyledPreviousNextLinkContainer>

                <CPStyledPreviousLink to={process.env.PUBLIC_URL + "/"} > Previous </CPStyledPreviousLink>
                <CPStyledNextLink to={process.env.PUBLIC_URL + "/create_project/change_story"} > Next </CPStyledNextLink>

              </CPStyledPreviousNextLinkContainer>

            </CPForm>
          </CPFormContainer>
        </CPMainContainer>
      </React.Fragment>
      
      )
  }

}


export default CreateProjectScreen