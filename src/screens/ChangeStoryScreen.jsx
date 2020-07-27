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


const ChangeStoryScreen = () => {

  const savePdf = () => {

    let canvas_ch = document.getElementById('ch_pdf_container'); 
    window.scrollTo(0,0);  
    window.canvasObject[1].width = canvas_ch.offsetWidth;
    window.canvasObject[1].height = canvas_ch.offsetHeight;

    window.html2canvas(canvas_ch, {useCORS:true}).then(function(canvas) {
    window.canvasObject[1].canvas = canvas;

  })
}

    return (
      <React.Fragment>
        <CHMainContainer>
          <CHFormAndLabelContainer id="ch_pdf_container">

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
            <CHStyledPreviousNextLinkContainer data-html2canvas-ignore>
              <CHStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project"} > Previous </CHStyledPreviousLink>
              <CHStyledNextLink to={process.env.PUBLIC_URL + "/create_project/solution_and_data"} delay={100} pdfOnClick={savePdf}> Next </CHStyledNextLink>
            </CHStyledPreviousNextLinkContainer>

          </CHFormAndLabelContainer>
  
        </CHMainContainer>

      </React.Fragment>
      
      )
}

export default ChangeStoryScreen