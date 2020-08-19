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

import {useSelector, useDispatch} from 'react-redux'
import {changeCpCanvas} from '../actions/canvas'
import html2canvas from '@nidi/html2canvas'

const CreateProjectScreen = () => {

  const savePdf = () => {

    let canvas_cp = document.getElementById('cp_pdf_container'); 
    window.scrollTo(0,0);  
    window.canvasObject[0].width = canvas_cp.offsetWidth;
    window.canvasObject[0].height = canvas_cp.offsetHeight;

    html2canvas(canvas_cp, {useCORS:true}).then(function(canvas) {
    window.canvasObject[0].canvas = canvas;

  })
}

    return (
      <React.Fragment>
        <CPMainContainer>
          <CPFormContainer id="cp_pdf_container">
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
              <CPStyledPreviousNextLinkContainer data-html2canvas-ignore>

                <CPStyledPreviousLink to={process.env.PUBLIC_URL + "/"} > Previous </CPStyledPreviousLink>
                <CPStyledNextLink to={process.env.PUBLIC_URL + "/create_project/change_story"} delay={100} pdfOnClick={savePdf}> Next </CPStyledNextLink>

              </CPStyledPreviousNextLinkContainer>

            </CPForm>
          </CPFormContainer>
        </CPMainContainer>
      </React.Fragment>
      
      )
    }



export default CreateProjectScreen