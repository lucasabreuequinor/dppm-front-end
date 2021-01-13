import React from 'react'
import { BCItemsMainContainer,
         BCItemsContainer,
         BCItemsLabel,
         BCItemsCostSavingNetProdTotalTableContainer,
         BCItemsCostSavingNetProdTotalTableItemColumn,

         BCItemsCostSavingNetProdTotalTableBaselineContainer,
         BCItemsCostSavingNetProdTotalTableBaselineColumn,
         BCItemsCostSavingNetProdTotalTableBaselineSelect,

         BCItemsCostSavingNetProdTotalTableYear1Container,
         BCItemsCostSavingNetProdTotalTableYear1Column,
         BCItemsCostSavingNetProdTotalTableYear1Select,

         BCItemsCostSavingNetProdTotalTableYear2Container,
         BCItemsCostSavingNetProdTotalTableYear2Column,
         BCItemsCostSavingNetProdTotalTableYear2Select,

         BCItemsCostSavingNetProdTotalTableYear3Container,
         BCItemsCostSavingNetProdTotalTableYear3Column,
         BCItemsCostSavingNetProdTotalTableYear3Select,

         BCItemsCostSavingNetProdTotalTableYear4Container,
         BCItemsCostSavingNetProdTotalTableYear4Column,
         BCItemsCostSavingNetProdTotalTableYear4Select,

         BCItemsCostSavingNetProdTotalTableYear5Container,
         BCItemsCostSavingNetProdTotalTableYear5Column,
         BCItemsCostSavingNetProdTotalTableYear5Select,

         BCItemsCostSavingNetProdTotalTableTotalContainer,
         BCItemsCostSavingNetProdTotalTableTotalColumn,

         BCItemsCostSavingNetProdTotalTableAssumptionsCommentsContainer,
         BCItemsCostSavingNetProdTotalTableAssumptionsCommentsColumn,

         BCItemsCostPerYearBaselineTotal,
         BCItemsCostPerYearYear1Total,
         BCItemsCostPerYearYear2Total,
         BCItemsCostPerYearYear3Total,
         BCItemsCostPerYearYear4Total,
         BCItemsCostPerYearYear5Total,
         BCItemsCostPerYearTotal,

         BCItemsCostPerYearLabel,
         
         BCItemsCostPerYearItemItem,
         BCItemsCostPerYearItemBaseline,
         BCItemsCostPerYearItemYear1,
         BCItemsCostPerYearItemYear2,
         BCItemsCostPerYearItemYear3,
         BCItemsCostPerYearItemYear4,
         BCItemsCostPerYearItemYear5,
         BCItemsCostPerYearItemTotal,
         BCItemsCostPerYearItemAssumptionsComments,

         BCItemsCostPerYearButtonsContainer,

         BCItemsCostPerYearAddCostItemButtonContainer,
         BCItemsCostPerYearAddCostItemButton,
         BCItemsCostPerYearAddCostItemButtonLabel,

         BCItemsCostPerYearDeleteCostItemButtonContainer,
         BCItemsCostPerYearDeleteCostItemButton,
         BCItemsCostPerYearDeleteCostItemButtonLabel,
         
         BCItemsSavingPerYearLabel,

         BCItemsSavingPerYearBaselineTotal,
         BCItemsSavingPerYearYear1Total,
         BCItemsSavingPerYearYear2Total,
         BCItemsSavingPerYearYear3Total,
         BCItemsSavingPerYearYear4Total,
         BCItemsSavingPerYearYear5Total,
         BCItemsSavingPerYearTotal,
       
         BCItemsSavingPerYearItemItem,
         BCItemsSavingPerYearItemBaseline,
         BCItemsSavingPerYearItemYear1,
         BCItemsSavingPerYearItemYear2,
         BCItemsSavingPerYearItemYear3,
         BCItemsSavingPerYearItemYear4,
         BCItemsSavingPerYearItemYear5,
         BCItemsSavingPerYearItemTotal,
         BCItemsSavingPerYearItemAssumptionsComments,
         
         BCItemsSavingPerYearButtonsContainer,
       
         BCItemsSavingPerYearAddSavingItemButtonContainer,
         BCItemsSavingPerYearAddSavingItemButton,
         BCItemsSavingPerYearAddSavingItemButtonLabel,
       
         BCItemsSavingPerYearDeleteSavingItemButtonContainer,
         BCItemsSavingPerYearDeleteSavingItemButton,
         BCItemsSavingPerYearDeleteSavingItemButtonLabel,

         BCItemsTotalPerYearLabel,

         BCItemsTotalPerYearBaselineTotal,
         BCItemsTotalPerYearYear1Total,
         BCItemsTotalPerYearYear2Total,
         BCItemsTotalPerYearYear3Total,
         BCItemsTotalPerYearYear4Total,
         BCItemsTotalPerYearYear5Total,
         BCItemsTotalPerYearTotal,

         BCItemstyledPreviousNextLinkContainer,
         BCItemsStyledPreviousLink,
         BCItemsStyledNextLink
                
         }
       from '../components/business_case_itens_screen'

import { useSelector, useDispatch } from 'react-redux'
import { addCostItem,
         deleteCostItem, 
         incrementNextCostItemID, 
         decrementNextCostItemID,
         
         addSavingItem,
         deleteSavingItem,
         incrementNextSavingItemID,
         decrementNextSavingItemID, }   

      from '../actions/business_case_items'
      
import html2canvas from '@nidi/html2canvas'

const BusinessCaseItensScreen = () => {

  const dispatch = useDispatch(); 

  const costItems = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems);
  const nextCostItemId = useSelector(state => state.bciReducers.bciItems.bciCostItems.nextCostItemId);
  const maxCostItems = useSelector(state => state.bciReducers.bciItems.bciCostItems.maxCostItems);
  
  const savingItems = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems);
  const nextSavingItemId = useSelector(state => state.bciReducers.bciItems.bciSavingItems.nextSavingItemId);
  const maxSavingItems = useSelector(state => state.bciReducers.bciItems.bciSavingItems.maxSavingItems);
  
  const addNewCostItem = (e) => {
    
    if(costItems.length < maxCostItems)
    {
      dispatch(addCostItem(
                {
                  id: nextCostItemId,
                  item: "test",
                  baseline: 0,
                  year1: 0,
                  year2: 0,
                  year3: 0,
                  year4: 0,
                  year5: 0,
                  total:0,
                  assumptionsComments: "test"
                }
      ))
      dispatch(incrementNextCostItemID())
    }
    else
      alert(`Maximum Cost Items:${maxCostItems}`)

    e.preventDefault()

  }

  const deleteAnCostItem = (e) => {

    if(costItems.length > 0)
    {
      dispatch(deleteCostItem({id:costItems.length-1}))
      dispatch(decrementNextCostItemID())
    }
    e.preventDefault()
  }

  const addNewSavingItem = (e) => {
    
    if(savingItems.length < maxSavingItems)
    {
      dispatch(addSavingItem(
                {
                  id: nextSavingItemId,
                  item: "test",
                  baseline: 0,
                  year1: 0,
                  year2: 0,
                  year3: 0,
                  year4: 0,
                  year5: 0,
                  total: 0,
                  assumptionsComments: "test"
                }
      ))
      dispatch(incrementNextSavingItemID())
    }
    else
      alert(`Maximum Saving Items:${maxSavingItems}`)
  
    e.preventDefault()
  }

  const deleteAnSavingItem = (e) => {

    if(savingItems.length > 0)
    {
      dispatch(deleteSavingItem({id:savingItems.length-1}))
      dispatch(decrementNextSavingItemID())
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

  const savePdf = () => {

    let canvas_bcItems = document.getElementById('bcitems_pdf_container');
    canvas_bcItems.style.opacity='0';
    /*** BEAUTY THE STYLE TO PRESENT ON PDF ***/

    Array.from(document.getElementsByClassName('hide')).map(el => {
      el.classList.add('hide-pdf')
    })


    Array.from(document.getElementsByClassName('ignore')).map(el => {
      el.classList.add('ignore-pdf')
    })
    
    Array.from(document.getElementsByClassName('table-column')).map( el => {
      el.classList.add('table-column-pdf')
      
    })

    Array.from(document.getElementsByClassName('table-label')).map( el => {
      el.classList.add('table-label-pdf')
      
    })

    Array.from(document.getElementsByClassName('hide-arrow-select')).map( el => {
      el.classList.add('hide-arrow-select-pdf')
      
    })

    window.scrollTo(0,0);  
    window.canvasObject[4].width = canvas_bcItems.offsetWidth;
    window.canvasObject[4].height = canvas_bcItems.offsetHeight;
    
    html2canvas(canvas_bcItems, {
      onclone: function(clonedDoc) {
        let canvas_bcItems = clonedDoc.getElementById('bcitems_pdf_container');
        canvas_bcItems.style.opacity='1';
      }
    }).then(function(canvas) {  /*Agendando uma MICROTASK*/
        window.canvasObject[4].canvas = canvas.toDataURL('image/jpeg', 1.0);

  })
}

  return (
      <React.Fragment>
        <BCItemsMainContainer>
          <BCItemsContainer id="bcitems_pdf_container">
            <BCItemsLabel className="ignore" >Performance Indicators</BCItemsLabel>
            <BCItemsCostSavingNetProdTotalTableContainer>
              <BCItemsCostSavingNetProdTotalTableItemColumn className="hide" >Item</BCItemsCostSavingNetProdTotalTableItemColumn>
              
              <BCItemsCostSavingNetProdTotalTableBaselineContainer className="del-margin">
                <BCItemsCostSavingNetProdTotalTableBaselineColumn className="ignore" >Baseline</BCItemsCostSavingNetProdTotalTableBaselineColumn>
                <BCItemsCostSavingNetProdTotalTableBaselineSelect className="hide-arrow-select"></BCItemsCostSavingNetProdTotalTableBaselineSelect>
              </BCItemsCostSavingNetProdTotalTableBaselineContainer>

              <BCItemsCostSavingNetProdTotalTableYear1Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear1Column className="ignore" >Year 1</BCItemsCostSavingNetProdTotalTableYear1Column>
                <BCItemsCostSavingNetProdTotalTableYear1Select className="hide-arrow-select"></BCItemsCostSavingNetProdTotalTableYear1Select>
              </BCItemsCostSavingNetProdTotalTableYear1Container>

              <BCItemsCostSavingNetProdTotalTableYear2Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear2Column className="ignore" >Year 2</BCItemsCostSavingNetProdTotalTableYear2Column>
                <BCItemsCostSavingNetProdTotalTableYear2Select className="hide-arrow-select"></BCItemsCostSavingNetProdTotalTableYear2Select> 
              </BCItemsCostSavingNetProdTotalTableYear2Container>


              <BCItemsCostSavingNetProdTotalTableYear3Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear3Column className="ignore" >Year 3</BCItemsCostSavingNetProdTotalTableYear3Column>
                <BCItemsCostSavingNetProdTotalTableYear3Select className="hide-arrow-select"></BCItemsCostSavingNetProdTotalTableYear3Select> 
              </BCItemsCostSavingNetProdTotalTableYear3Container>

              <BCItemsCostSavingNetProdTotalTableYear4Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear4Column className="ignore" >Year 4</BCItemsCostSavingNetProdTotalTableYear4Column>
                <BCItemsCostSavingNetProdTotalTableYear4Select className="hide-arrow-select"></BCItemsCostSavingNetProdTotalTableYear4Select> 
              </BCItemsCostSavingNetProdTotalTableYear4Container>

              <BCItemsCostSavingNetProdTotalTableYear5Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear5Column className="ignore" >Year 5</BCItemsCostSavingNetProdTotalTableYear5Column>
                <BCItemsCostSavingNetProdTotalTableYear5Select className="hide-arrow-select"></BCItemsCostSavingNetProdTotalTableYear5Select> 
              </BCItemsCostSavingNetProdTotalTableYear5Container>

              <BCItemsCostSavingNetProdTotalTableTotalContainer className="del-margin">
                <BCItemsCostSavingNetProdTotalTableTotalColumn className="table-column" >Total</BCItemsCostSavingNetProdTotalTableTotalColumn>
              </BCItemsCostSavingNetProdTotalTableTotalContainer>

              <BCItemsCostSavingNetProdTotalTableAssumptionsCommentsContainer className="del-margin">
                <BCItemsCostSavingNetProdTotalTableAssumptionsCommentsColumn className="table-column" >Assumptions/Comments</BCItemsCostSavingNetProdTotalTableAssumptionsCommentsColumn>
              </BCItemsCostSavingNetProdTotalTableAssumptionsCommentsContainer>

              <BCItemsCostPerYearLabel className="table-label" >Costs per year</BCItemsCostPerYearLabel>

              <BCItemsCostPerYearBaselineTotal></BCItemsCostPerYearBaselineTotal>
              <BCItemsCostPerYearYear1Total></BCItemsCostPerYearYear1Total>
              <BCItemsCostPerYearYear2Total></BCItemsCostPerYearYear2Total>
              <BCItemsCostPerYearYear3Total></BCItemsCostPerYearYear3Total>
              <BCItemsCostPerYearYear4Total></BCItemsCostPerYearYear4Total>
              <BCItemsCostPerYearYear5Total></BCItemsCostPerYearYear5Total>
              <BCItemsCostPerYearTotal></BCItemsCostPerYearTotal>
              <div style={{borderBottom: "0.1rem solid #808080"}}></div>

              {
                costItems.map(costItem => 
                  <React.Fragment>
                    <BCItemsCostPerYearItemItem className="ignore" costItem={costItem}></BCItemsCostPerYearItemItem>
                    <BCItemsCostPerYearItemBaseline className="ignore" costItem={costItem}></BCItemsCostPerYearItemBaseline>
                    <BCItemsCostPerYearItemYear1 className="ignore" costItem={costItem}></BCItemsCostPerYearItemYear1>       
                    <BCItemsCostPerYearItemYear2 className="ignore" costItem={costItem}></BCItemsCostPerYearItemYear2>              
                    <BCItemsCostPerYearItemYear3 className="ignore" costItem={costItem}></BCItemsCostPerYearItemYear3>              
                    <BCItemsCostPerYearItemYear4 className="ignore" costItem={costItem}></BCItemsCostPerYearItemYear4>              
                    <BCItemsCostPerYearItemYear5 className="ignore" costItem={costItem}></BCItemsCostPerYearItemYear5>
                    <BCItemsCostPerYearItemTotal className="ignore" costItem={costItem}></BCItemsCostPerYearItemTotal>              
                    <BCItemsCostPerYearItemAssumptionsComments className="ignore" costItem={costItem}></BCItemsCostPerYearItemAssumptionsComments>              
                  </React.Fragment>
                )
              }             

              <BCItemsCostPerYearButtonsContainer className="ignore">

                <BCItemsCostPerYearAddCostItemButtonContainer>
                  <BCItemsCostPerYearAddCostItemButton onClick={ addNewCostItem }></BCItemsCostPerYearAddCostItemButton>
                  <BCItemsCostPerYearAddCostItemButtonLabel>
                    Add item
                  </BCItemsCostPerYearAddCostItemButtonLabel>
                </BCItemsCostPerYearAddCostItemButtonContainer>

                <BCItemsCostPerYearDeleteCostItemButtonContainer>
                  <BCItemsCostPerYearDeleteCostItemButton onClick={ deleteAnCostItem }></BCItemsCostPerYearDeleteCostItemButton>
                  <BCItemsCostPerYearDeleteCostItemButtonLabel>
                    Delete item
                  </BCItemsCostPerYearDeleteCostItemButtonLabel>
                </BCItemsCostPerYearDeleteCostItemButtonContainer>

              </BCItemsCostPerYearButtonsContainer>

              <BCItemsSavingPerYearLabel className="table-label" >Savings per year</BCItemsSavingPerYearLabel>
              
              <BCItemsSavingPerYearBaselineTotal></BCItemsSavingPerYearBaselineTotal>
              <BCItemsSavingPerYearYear1Total></BCItemsSavingPerYearYear1Total>
              <BCItemsSavingPerYearYear2Total></BCItemsSavingPerYearYear2Total>
              <BCItemsSavingPerYearYear3Total></BCItemsSavingPerYearYear3Total>
              <BCItemsSavingPerYearYear4Total></BCItemsSavingPerYearYear4Total>
              <BCItemsSavingPerYearYear5Total></BCItemsSavingPerYearYear5Total>
              <BCItemsSavingPerYearTotal></BCItemsSavingPerYearTotal>
              <div style={{borderBottom: "0.1rem solid #808080"}}></div>  

              {
                savingItems.map(savingItem =>
                  <React.Fragment>
                    <BCItemsSavingPerYearItemItem className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemItem>
                    <BCItemsSavingPerYearItemBaseline className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemBaseline>
                    <BCItemsSavingPerYearItemYear1 className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemYear1>       
                    <BCItemsSavingPerYearItemYear2 className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemYear2>              
                    <BCItemsSavingPerYearItemYear3 className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemYear3>              
                    <BCItemsSavingPerYearItemYear4 className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemYear4>              
                    <BCItemsSavingPerYearItemYear5 className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemYear5>
                    <BCItemsSavingPerYearItemTotal className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemTotal>              
                    <BCItemsSavingPerYearItemAssumptionsComments className="ignore" savingItem={savingItem}></BCItemsSavingPerYearItemAssumptionsComments>
                  </React.Fragment>          
                )
              }

              <BCItemsSavingPerYearButtonsContainer className="ignore">

                <BCItemsSavingPerYearAddSavingItemButtonContainer>
                  <BCItemsSavingPerYearAddSavingItemButton onClick={ addNewSavingItem }></BCItemsSavingPerYearAddSavingItemButton>
                  <BCItemsSavingPerYearAddSavingItemButtonLabel>
                    Add item
                  </BCItemsSavingPerYearAddSavingItemButtonLabel>
                </BCItemsSavingPerYearAddSavingItemButtonContainer>


                <BCItemsSavingPerYearDeleteSavingItemButtonContainer>
                  <BCItemsSavingPerYearDeleteSavingItemButton onClick={ deleteAnSavingItem }></BCItemsSavingPerYearDeleteSavingItemButton>
                  <BCItemsSavingPerYearDeleteSavingItemButtonLabel>
                    Delete item
                  </BCItemsSavingPerYearDeleteSavingItemButtonLabel>
                </BCItemsSavingPerYearDeleteSavingItemButtonContainer>

              </BCItemsSavingPerYearButtonsContainer>
              
              <BCItemsTotalPerYearLabel className="table-label" >Total effect</BCItemsTotalPerYearLabel>

              <BCItemsTotalPerYearBaselineTotal></BCItemsTotalPerYearBaselineTotal>
              <BCItemsTotalPerYearYear1Total></BCItemsTotalPerYearYear1Total>
              <BCItemsTotalPerYearYear2Total></BCItemsTotalPerYearYear2Total>
              <BCItemsTotalPerYearYear3Total></BCItemsTotalPerYearYear3Total>
              <BCItemsTotalPerYearYear4Total></BCItemsTotalPerYearYear4Total>
              <BCItemsTotalPerYearYear5Total></BCItemsTotalPerYearYear5Total>
              <BCItemsTotalPerYearTotal></BCItemsTotalPerYearTotal>
              <div style={{borderBottom: "0.1rem solid #808080"}}></div>          

            </BCItemsCostSavingNetProdTotalTableContainer>

            <BCItemstyledPreviousNextLinkContainer className="ignore">
                <BCItemsStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/business_case"} > Previous </BCItemsStyledPreviousLink>
                <BCItemsStyledNextLink to={process.env.PUBLIC_URL + "/create_project/business_case_realization_plan"} delay={100} pdfOnClick={savePdf}> Next </BCItemsStyledNextLink>
            </BCItemstyledPreviousNextLinkContainer>

          </BCItemsContainer>
        </BCItemsMainContainer>
      </React.Fragment>
  )
}

export default BusinessCaseItensScreen