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
  LPCMStyledNextLink,

  LPCMGeneratePDFContainer,
  LPCMGeneratePDFButton

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

import A3Pdf from '../components/pdf_components/A3Pdf'
import store from '../store'
import html2canvas from '@nidi/html2canvas'

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

  const getAllElementsWithAttribute = (rootDoc, attribute) => {

    var matchingElements = [];
    var allElements = rootDoc.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++)
    {
      if (allElements[i].getAttribute(attribute) !== null)
      {
        // Element exists with attribute. Add to array.
        matchingElements.push(allElements[i]);
      }
    }
    return matchingElements;
  }

  const generatePDF = () => {  
 
    let canvas_lpcm_one = document.getElementById('lpcm_pdf_container_one');
    canvas_lpcm_one.style.opacity='0';

    let canvas_lpcm_two = document.getElementById('lpcm_pdf_container_two');
    canvas_lpcm_two.style.opacity='0';
    
    /*** BEAUTY THE STYLE TO PRESENT ON PDF ***/
    
    Array.from(document.getElementsByClassName('ignore')).map(el => {
      el.classList.add('ignore-pdf')
    })
    
    Array.from(document.getElementsByClassName('table-column')).map( el => {
      el.classList.add('table-column-pdf')
      
    })         

    window.scrollTo(0,0);  

    html2canvas(canvas_lpcm_one, {
      onclone: function(clonedDoc) {
        let canvas_lpcm_one = clonedDoc.getElementById('lpcm_pdf_container_one');
        canvas_lpcm_one.style.opacity='1';
      }               
    }).then(function(canvas) {
      window.canvasObject[9].canvasOne = canvas.toDataURL('image/jpeg', 1.0);

    })
    
    html2canvas(canvas_lpcm_two, {
      onclone: function(clonedDoc) {
        let canvas_lpcm_two = clonedDoc.getElementById('lpcm_pdf_container_two');
        canvas_lpcm_two.style.opacity='1';
      }              
    }).then(function(canvas) {

      /*Restoring the styles*/
      Array.from(document.getElementsByClassName('ignore')).map(el => {
        el.classList.remove('ignore-pdf')
      })
      
      Array.from(document.getElementsByClassName('table-column')).map( el => {
        el.classList.remove('table-column-pdf')
        
      })

      /*Restoring the opacity*/
      canvas_lpcm_one.style.opacity='1';
      canvas_lpcm_two.style.opacity='1';      

      window.canvasObject[9].canvasTwo = canvas.toDataURL('image/jpeg', 1.0);
      
    })        

    setTimeout(() => {

          A3Pdf().then((blob) => {
            console.log(blob);
            var a = document.getElementById('pdf-download-link'),
                url = window.URL.createObjectURL(blob);
      
            a.href = url;
            a.download = store.getState().cpReducers.cpName;
            window.open(url)
            window.URL.revokeObjectURL(url);

          })  

        }
    
    , 2000)

  }

  return (
      <React.Fragment>
        <LPCMMainContainer>
          <LPCMContainer>
            <LPCMLegalPlanLabel className="ignore" >Legal and security plan</LPCMLegalPlanLabel>
            <LPCMLegalPlanTableContainer id="lpcm_pdf_container_one">

              <LPCMRequirementColumn className="table-column" >Requirements</LPCMRequirementColumn>
              <LPCMStatusColumn className="table-column" >Status</LPCMStatusColumn>
              <LPCMFollowUpActionColumn className="table-column" >Follow up actions</LPCMFollowUpActionColumn>
              <LPCMReviewedApprovedColumn className="table-column" >Reviewed/approved by</LPCMReviewedApprovedColumn>

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

              <LPCMLegalButtonsContainer className="ignore" >

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


            <LPCMChangeMgmtLabel className="ignore" >Change management and value realisation</LPCMChangeMgmtLabel>
            <LPCMChangeMgmtTableContainer id="lpcm_pdf_container_two"> 

              <LPCMRequirementColumn className="table-column" >Requirements</LPCMRequirementColumn>  
              <LPCMStatusColumn className="table-column" >Status</LPCMStatusColumn>
              <LPCMFollowUpActionColumn className="table-column" >Follow up actions</LPCMFollowUpActionColumn>
              <LPCMReviewedApprovedColumn className="table-column" >Reviewed/approved by</LPCMReviewedApprovedColumn>


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

              <LPCMChangeMgmtButtonsContainer className="ignore" >

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

            <LPCMStyledPreviousNextLinkContainer className="ignore" >
              <LPCMStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/risk_register"} > Previous </LPCMStyledPreviousLink>
              <LPCMStyledNextLink to={process.env.PUBLIC_URL + "/"} > Next </LPCMStyledNextLink>
            </LPCMStyledPreviousNextLinkContainer>


            <LPCMGeneratePDFContainer className="ignore">
              <LPCMGeneratePDFButton onClick={ generatePDF }> Download PDF </LPCMGeneratePDFButton>
            </LPCMGeneratePDFContainer>  
          </LPCMContainer>
          <a target="_blank" id="pdf-download-link" style={{display: "none"}} title="Download PDF File"></a>
        </LPCMMainContainer>

      </React.Fragment>
  )
}

export default LegalPlanChangeMgmtScreen