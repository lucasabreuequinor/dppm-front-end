import React from 'react'
import {
  LPCMMainContainer,
  LPCMContainer,

  LPCMLegalPlanLabel,
  LPCMLegalPlanTableContainer,

  LPCMRequirementColumn,
  LPCMStatusColumn,
  LPCMFollowUpActionColumn,
  LPCMReviewedApprovedColumn,

  LPCMLegalItemRequirement,
  LPCMLegalItemStatus,
  LPCMLegalItemFollowUpAction,
  LPCMLegalItemReviewedApproved,
  
  LPCMLegalButtonsContainer,

  LPCMaddLegalButtonContainer,
  LPCMaddLegalButton,
  LPCMaddLegalButtonLabel,
  
  LPCMdeleteLegalButtonContainer,
  LPCMdeleteLegalButton,
  LPCMdeleteLegalButtonLabel,

  LPCMChangeMgmtLabel,
  LPCMChangeMgmtTableContainer,

  LPCMChangeMgmtItemRequirement,
  LPCMChangeMgmtItemStatus,
  LPCMChangeMgmtItemFollowUpAction,
  LPCMChangeMgmtItemReviewedApproved,

  LPCMChangeMgmtButtonsContainer,

  LPCMaddChangeMgmtButtonContainer,
  LPCMaddChangeMgmtButton,
  LPCMaddChangeMgmtButtonLabel,

  LPCMdeleteChangeMgmtButtonContainer,
  LPCMdeleteChangeMgmtButton,
  LPCMdeleteChangeMgmtButtonLabel,

  LPCMStyledPreviousNextLinkContainer,
  LPCMStyledPreviousLink,
  LPCMStyledNextLink

//         RRButtonsContainer,

//         RRaddRiskButtonContainer,
//         RRaddRiskButton,
//         RRaddRiskButtonLabel,

//         RRdeleteRiskButtonContainer,
//         RRdeleteRiskButton,
//         RRdeleteRiskButtonLabel,

//         RRStyledPreviousNextLinkContainer,
//         RRStyledPreviousLink,
//         RRStyledNextLink

         }
       from '../components/legal_plan_change_mgmt_screen'

import { useSelector, useDispatch } from 'react-redux'
import { addLegalItem,
         addChangeMgmtItem,

         deleteLegalItem,
         deleteChangeMgmtItem,

         incrementNextLegalItemID,
         incrementNextChangeMgmtItemID,

         decrementNextLegalItemID,
         decrementNextChangeMgmtItemID
         }   
  from '../actions/legal_plan_change_mgmt'


const LegalPlanChangeMgmtScreen = () => {

  const dispatch = useDispatch(); 

  const legalItems = useSelector(state => state.lpcmReducers.lpcmItems.lpcmLegalItems.legalItems);
  const nextLegalItemId = useSelector(state => state.lpcmReducers.lpcmItems.lpcmLegalItems.nextLegalItemId);
  const maxLegalItems = useSelector(state => state.lpcmReducers.lpcmItems.lpcmLegalItems.maxLegalItems);

  const changeMgmtItems = useSelector(state => state.lpcmReducers.lpcmItems.lpcmChangeMgmtItems.changeMgmtItems);
  const nextChangeMgmtItemId = useSelector(state => state.lpcmReducers.lpcmItems.lpcmChangeMgmtItems.nextChangeMgmtItemId);
  const maxChangeMgmtItems = useSelector(state => state.lpcmReducers.lpcmItems.lpcmChangeMgmtItems.maxChangeMgmtItems);

  const addNewLegal = (e) => {
    
    if(legalItems.length < maxLegalItems)
    {
      dispatch(addLegalItem(
                {
                  id: nextLegalItemId,
                  requirement: "test",
                  status: "test",
                  follow_up_action: "test",
                  reviewed_approved: "test"
                }
      ))
      dispatch(incrementNextLegalItemID())
    }
    else
      alert(`Maximum Legals:${maxLegalItems}`)
  
    e.preventDefault()
  
  }

  const deleteAnLegal = (e) => {

    if(legalItems.length > 0)
    {
      dispatch(deleteLegalItem({id:legalItems.length-1}))
      dispatch(decrementNextLegalItemID())
    }
    e.preventDefault()
  }

  const addNewChangeMgmt = (e) => {
    
    if(changeMgmtItems.length < maxChangeMgmtItems)
    {
      dispatch(addChangeMgmtItem(
                {
                  id: nextChangeMgmtItemId,
                  requirement: "test",
                  status: "test",
                  follow_up_action: "test",
                  reviewed_approved: "test"
                }
      ))
      dispatch(incrementNextChangeMgmtItemID())
    }
    else
      alert(`Maximum ChangeMgmts:${maxChangeMgmtItems}`)
  
    e.preventDefault()
  
  }

  const deleteAnChangeMgmt = (e) => {

    if(changeMgmtItems.length > 0)
    {
      dispatch(deleteChangeMgmtItem({id:changeMgmtItems.length-1}))
      dispatch(decrementNextChangeMgmtItemID())
    }
    e.preventDefault()
  }

  const calculatePDF_height_width = (element, factor) => {
   
    let html_width = !factor ? element.width : element.width * factor
    let html_height = !factor ? element.height: element.height * factor

    return {
        html_width,
        html_height
    }
  }

  const generatePDF = () => {

    let pixelToMM = (pixels) => {
      return ( pixels * 25.4 ) / (window.devicePixelRatio*96)
    }

    let pdf = new window.jsPDF('p', 'mm', 'a3'),
        availableHeightOnCurrentPage = pdf.internal.pageSize.getHeight(),
        totalCanvasHeightOnCurrentPage = 0
        // fixedYdistance = pixelToMM(10)
        

    window.canvasObject
      .map((canvasItem, index) => {
        // index == 0 || index == 1 || index == 2
          if (1 == 1 )
          {

            let {
              html_width,
              html_height
            } = calculatePDF_height_width(canvasItem ,0.75);   

            html_width = pixelToMM(html_width)
            html_height = pixelToMM(html_height)

            let imgX = (pdf.internal.pageSize.getWidth()/2) - (html_width/2);

            // alert(`${html_height} <= ${availableHeightOnCurrentPage} = ${html_height <= availableHeightOnCurrentPage}`)
            if (html_height <= availableHeightOnCurrentPage) {

                pdf.addImage(canvasItem.canvas, 'JPEG',
                imgX, 
                totalCanvasHeightOnCurrentPage, 
                html_width, 
                html_height,
                null,
                'NONE'    
              );
              
              totalCanvasHeightOnCurrentPage = totalCanvasHeightOnCurrentPage + html_height
              availableHeightOnCurrentPage = availableHeightOnCurrentPage - totalCanvasHeightOnCurrentPage;
            }
            else {
              pdf.addPage()
              availableHeightOnCurrentPage = pdf.internal.pageSize.getHeight()
              totalCanvasHeightOnCurrentPage = 0;

              pdf.addImage(canvasItem.canvas, 'JPEG',
              imgX, 
              totalCanvasHeightOnCurrentPage, 
              html_width, 
              html_height,
              null,
              'NONE'    
            );

            totalCanvasHeightOnCurrentPage = totalCanvasHeightOnCurrentPage + html_height
            availableHeightOnCurrentPage = availableHeightOnCurrentPage - totalCanvasHeightOnCurrentPage;

            }
          }
          
          // pdf.addImage(canvasItem.canvas, 'JPEG',
          //                 imgX, 
          //                 fixedY, 
          //                 pixelToMM(html_width), 
          //                 pixelToMM(html_height),
          //                 null,
          //                 'NONE'    
          //           );
          // pdf.addPage()     

        
      })

    // let imgData = window.canvasObject['lpcmCanvas'].toDataURL("image/jpeg", 1.0)
    // pdf.addPage();
    // document.body.appendChild(window.canvasObject[8].canvas)
    // console.log(window.canvasObject[canvas])


    setTimeout(function() {
                    //Save PDF Doc	
                    // pdf.save("HTML-Document.pdf");

                    //Generate BLOB object
                    var blob = pdf.output("blob");

                    //Getting URL of blob object
                    var blobURL = URL.createObjectURL(blob);

                    // //Showing PDF generated in iFrame element
                    // var iframe = document.getElementById('sample-pdf');
                    // iframe.src = blobURL;

                    //Setting download link
                    var downloadLink = document.getElementById('pdf-download-link');
                    downloadLink.href = blobURL;        
      },0)
  }

  const savePdf = () => {

    let canvas_lpcm = document.getElementById('lpcm_pdf_container');
    window.scrollTo(0,0);
    window.html2canvas(canvas_lpcm).then(function(canvas) {
    window.canvasObject[9].canvas = canvas;
    window.canvasObject[9].width = canvas_lpcm.offsetWidth;
    window.canvasObject[9].height = canvas_lpcm.offsetHeight;

    generatePDF();

  });

  }

  return (
      <React.Fragment>
        <LPCMMainContainer>
          <LPCMContainer id="lpcm_pdf_container">
            <LPCMLegalPlanLabel>Legal and security plan</LPCMLegalPlanLabel>
            <LPCMLegalPlanTableContainer>

              <LPCMRequirementColumn>Requirements</LPCMRequirementColumn>
              <LPCMStatusColumn>Status</LPCMStatusColumn>
              <LPCMFollowUpActionColumn>Follow up actions</LPCMFollowUpActionColumn>
              <LPCMReviewedApprovedColumn>Reviewed/approved by</LPCMReviewedApprovedColumn>

              {
                legalItems.map(legal => 
                  <React.Fragment>
                    <LPCMLegalItemRequirement legal={legal}></LPCMLegalItemRequirement>
                    <LPCMLegalItemStatus legal={legal}></LPCMLegalItemStatus>
                    <LPCMLegalItemFollowUpAction legal={legal}></LPCMLegalItemFollowUpAction>              
                    <LPCMLegalItemReviewedApproved legal={legal}></LPCMLegalItemReviewedApproved>              
                  </React.Fragment>
                )
              }

              <LPCMLegalButtonsContainer data-html2canvas-ignore>

                <LPCMaddLegalButtonContainer>
                  <LPCMaddLegalButton onClick={ addNewLegal }></LPCMaddLegalButton>
                  <LPCMaddLegalButtonLabel>
                    Add item
                  </LPCMaddLegalButtonLabel>
                </LPCMaddLegalButtonContainer>

                <LPCMdeleteLegalButtonContainer>
                  <LPCMdeleteLegalButton onClick={ deleteAnLegal }></LPCMdeleteLegalButton>
                  <LPCMdeleteLegalButtonLabel>
                    Delete item
                  </LPCMdeleteLegalButtonLabel>
                </LPCMdeleteLegalButtonContainer>

              </LPCMLegalButtonsContainer>           

            </LPCMLegalPlanTableContainer>


            <LPCMChangeMgmtLabel>Change management and value realisation</LPCMChangeMgmtLabel>
            <LPCMChangeMgmtTableContainer> 

              <LPCMRequirementColumn>Legal and security plan</LPCMRequirementColumn>  
              <LPCMStatusColumn>Status</LPCMStatusColumn>
              <LPCMFollowUpActionColumn>Follow up actions</LPCMFollowUpActionColumn>
              <LPCMReviewedApprovedColumn>Reviewed/approved by</LPCMReviewedApprovedColumn>


              {
                changeMgmtItems.map(changeMgmt => 
                  <React.Fragment>
                    <LPCMChangeMgmtItemRequirement changeMgmt={changeMgmt}></LPCMChangeMgmtItemRequirement>
                    <LPCMChangeMgmtItemStatus changeMgmt={changeMgmt}></LPCMChangeMgmtItemStatus>
                    <LPCMChangeMgmtItemFollowUpAction changeMgmt={changeMgmt}></LPCMChangeMgmtItemFollowUpAction>              
                    <LPCMChangeMgmtItemReviewedApproved changeMgmt={changeMgmt}></LPCMChangeMgmtItemReviewedApproved>              
                  </React.Fragment>
                )
              }

              <LPCMChangeMgmtButtonsContainer data-html2canvas-ignore>

                <LPCMaddChangeMgmtButtonContainer>
                  <LPCMaddChangeMgmtButton onClick={ addNewChangeMgmt }></LPCMaddChangeMgmtButton>
                  <LPCMaddChangeMgmtButtonLabel>
                    Add item
                  </LPCMaddChangeMgmtButtonLabel>
                </LPCMaddChangeMgmtButtonContainer>

                <LPCMdeleteChangeMgmtButtonContainer>
                  <LPCMdeleteChangeMgmtButton onClick={ deleteAnChangeMgmt }></LPCMdeleteChangeMgmtButton>
                  <LPCMdeleteChangeMgmtButtonLabel>
                    Delete item
                  </LPCMdeleteChangeMgmtButtonLabel>
                </LPCMdeleteChangeMgmtButtonContainer>

              </LPCMChangeMgmtButtonsContainer>              

            </LPCMChangeMgmtTableContainer>

            <LPCMStyledPreviousNextLinkContainer data-html2canvas-ignore>
              <LPCMStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/risk_register"} > Previous </LPCMStyledPreviousLink>
              <LPCMStyledNextLink to={process.env.PUBLIC_URL + "/"} > Next </LPCMStyledNextLink>
            </LPCMStyledPreviousNextLinkContainer>
              
          </LPCMContainer>

          <a href="https://srv-file10.gofile.io/download/tvGy9i/dppm-wireframe.pdf" >Download PDF file (COMPLETE)</a>
          <a style={{display:'block', marginTop:'10px'}} href="https://srv-file10.gofile.io/download/tvGy9i/dppm-wireframe.pdf" >Download PDF file 
          </a>
        </LPCMMainContainer>

      </React.Fragment>
  )
}

export default LegalPlanChangeMgmtScreen