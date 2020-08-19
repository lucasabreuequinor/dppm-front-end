import React from "react";
import {
  SADMainContainer,
  SADFormAndLabelContainer,
  SADFormsContainer,
  SADMakeOrBuySolutionOverviewContainer,
  SADMakeOrBuyContainer,
  SADMakeOrBuyLabel,
  SADMakeOrBuyTextArea,
  SADSolutionOverviewContainer,
  SADSolutionOverviewLabel,
  SADSolutionOverviewTextArea,
  SADArchDiagramsArchDetailsContainer,
  SADArchDiagramsContainer,
  SADArchDiagramsLabel,
  SADArchDiagramsTextArea,
  SADArchDetailsContainer,
  SADArchDetailsLabel,
  SADArchDetailsInput,
  SADArchContractTechSetupOperationRunbookContainer,
  SADArchContractContainer,
  SADArchContractStatusContainer,
  SADArchContractTitle,
  SADArchContractStatusInput,
  SADArchContractStatusLabel,
  SADArchContractFollowUpContainer,
  SADArchContractFollowUpLabel,
  SADArchContractFollowUpInput,
  SADArchContractReviewedByContainer,
  SADArchContractReviewedByLabel,
  SADArchContractReviewedByInput,
  SADTechSetupContainer,
  SADTechSetupTitle,
  SADTechSetupStatusContainer,
  SADTechSetupStatusLabel,
  SADTechSetupStatusInput,
  SADTechSetupFollowUpContainer,
  SADTechSetupFollowUpLabel,
  SADTechSetupFollowUpInput,
  SADTechSetupReviewedByContainer,
  SADTechSetupReviewedByLabel,
  SADTechSetupReviewedByInput,
  SADOperationalRunbookContainer,
  SADOperationalRunbookTitle,
  SADOperationRunbookStatusContainer,
  SADOperationalRunbookStatusLabel,
  SADOperationalRunbookStatusInput,
  SADOperationalRunbookFollowUpContainer,
  SADOperationalRunbookFollowUpLabel,
  SADOperationalRunbookFollowUpInput,
  SADOperationalRunbookReviewedByContainer,
  SADOperationalRunbookReviewedByLabel,
  SADOperationalRunbookReviewedByInput,
  SADStyledPreviousNextLinkContainer,
  SADStyledPreviousLink,
  SADStyledNextLink,
  SADArchDiagramsUploadArchDiagramButton,
  SADArchDiagramsUploadArchDiagramInput,
  // CHByContainer,
  // CHByLabel,
  // CHByTextArea,
  // CHToContainer,
  // CHToLabel,
  // CHToTextArea,
  SADLabel,
  // CHStyledPreviousNextLinkContainer,
  // CHStyledNextLink,
  // CHStyledPreviousLink
  }
  from "../components/solution_and_data_screen"
import html2canvas from '@nidi/html2canvas'

  const SolutionAndDataScreen = () => {

    const savePdf = () => {

      let canvas_sad = document.getElementById('sad_pdf_container'); 
      window.scrollTo(0,0);  
      window.canvasObject[2].width = canvas_sad.offsetWidth;
      window.canvasObject[2].height = canvas_sad.offsetHeight;

      html2canvas(canvas_sad, {useCORS:true}).then(function(canvas) {
      window.canvasObject[2].canvas = canvas;

    })
  }

    return(
      <React.Fragment>
        <SADMainContainer>
          <SADFormAndLabelContainer id="sad_pdf_container">

            <SADLabel>Solution and Data</SADLabel>
            
            <SADFormsContainer>
              <SADMakeOrBuySolutionOverviewContainer>

                <SADMakeOrBuyContainer>
                  <SADMakeOrBuyLabel>Make or buy rationale</SADMakeOrBuyLabel>
                  <SADMakeOrBuyTextArea></SADMakeOrBuyTextArea>
                </SADMakeOrBuyContainer>


                <SADSolutionOverviewContainer>
                  <SADSolutionOverviewLabel>Solution overview</SADSolutionOverviewLabel>
                  <SADSolutionOverviewTextArea></SADSolutionOverviewTextArea>
                </SADSolutionOverviewContainer>

              </SADMakeOrBuySolutionOverviewContainer>
              
              <SADArchDiagramsArchDetailsContainer>

                  <SADArchDiagramsContainer>
                    <SADArchDiagramsLabel>Archtechture diagram:</SADArchDiagramsLabel>
                    
                    {/*CHANGE final to Div*/}
                    <SADArchDiagramsTextArea>Image Preview HERE !!!</SADArchDiagramsTextArea>  
                    {/*CHANGE final to Label*/}
                    <SADArchDiagramsUploadArchDiagramButton>Upload Diagram</SADArchDiagramsUploadArchDiagramButton>
                    <SADArchDiagramsUploadArchDiagramInput/>
                  </SADArchDiagramsContainer>

                  <SADArchDetailsContainer>
                    <SADArchDetailsLabel>Archtechture details:</SADArchDetailsLabel>
                    <SADArchDetailsInput></SADArchDetailsInput>
                  </SADArchDetailsContainer>
                  
              </SADArchDiagramsArchDetailsContainer>

              <SADArchContractTechSetupOperationRunbookContainer>

                <SADArchContractContainer>

                  <SADArchContractTitle>Archtechture contract</SADArchContractTitle>
                  <SADArchContractStatusContainer>
                    
                    <SADArchContractStatusLabel>Status</SADArchContractStatusLabel>
                    <SADArchContractStatusInput></SADArchContractStatusInput>

                  </SADArchContractStatusContainer>

                  <SADArchContractFollowUpContainer>
                    
                    <SADArchContractFollowUpLabel>Follow up</SADArchContractFollowUpLabel>
                    <SADArchContractFollowUpInput></SADArchContractFollowUpInput>

                  </SADArchContractFollowUpContainer>

                  <SADArchContractReviewedByContainer>
                    
                    <SADArchContractReviewedByLabel>Reviewed By</SADArchContractReviewedByLabel>
                    <SADArchContractReviewedByInput></SADArchContractReviewedByInput>

                  </SADArchContractReviewedByContainer>

                </SADArchContractContainer>

                <SADTechSetupContainer>

                  <SADTechSetupTitle>Technichal Setup</SADTechSetupTitle>
                  <SADTechSetupStatusContainer>
                    
                    <SADTechSetupStatusLabel>Status</SADTechSetupStatusLabel>
                    <SADTechSetupStatusInput></SADTechSetupStatusInput>

                  </SADTechSetupStatusContainer>

                  <SADTechSetupFollowUpContainer>
                    
                    <SADTechSetupFollowUpLabel>Follow up</SADTechSetupFollowUpLabel>
                    <SADTechSetupFollowUpInput></SADTechSetupFollowUpInput>

                  </SADTechSetupFollowUpContainer>

                  <SADTechSetupReviewedByContainer>
                    
                    <SADTechSetupReviewedByLabel>Reviewed By</SADTechSetupReviewedByLabel>
                    <SADTechSetupReviewedByInput></SADTechSetupReviewedByInput>

                  </SADTechSetupReviewedByContainer>

                </SADTechSetupContainer>

                <SADOperationalRunbookContainer>

                  <SADOperationalRunbookTitle>Operational Runbook</SADOperationalRunbookTitle>
                  <SADOperationRunbookStatusContainer>
                    
                    <SADOperationalRunbookStatusLabel>Status</SADOperationalRunbookStatusLabel>
                    <SADOperationalRunbookStatusInput></SADOperationalRunbookStatusInput>

                  </SADOperationRunbookStatusContainer>

                  <SADOperationalRunbookFollowUpContainer>
                    
                    <SADOperationalRunbookFollowUpLabel>Follow up</SADOperationalRunbookFollowUpLabel>
                    <SADOperationalRunbookFollowUpInput></SADOperationalRunbookFollowUpInput>

                  </SADOperationalRunbookFollowUpContainer>

                  <SADOperationalRunbookReviewedByContainer>
                    
                    <SADOperationalRunbookReviewedByLabel>Reviewed By</SADOperationalRunbookReviewedByLabel>
                    <SADOperationalRunbookReviewedByInput></SADOperationalRunbookReviewedByInput>

                  </SADOperationalRunbookReviewedByContainer>

                </SADOperationalRunbookContainer>


              </SADArchContractTechSetupOperationRunbookContainer>


            </SADFormsContainer>
            <SADStyledPreviousNextLinkContainer data-html2canvas-ignore>
              <SADStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/change_story"} > Previous </SADStyledPreviousLink>
              <SADStyledNextLink to={process.env.PUBLIC_URL + "/create_project/business_case"} delay={100} pdfOnClick={savePdf}> Next </SADStyledNextLink>
            </SADStyledPreviousNextLinkContainer>

          </SADFormAndLabelContainer>
          
        </SADMainContainer>

      </React.Fragment>

    )
}

export default SolutionAndDataScreen
