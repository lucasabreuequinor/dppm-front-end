import React from 'react'
import { BCItemsMainContainer,
         BCItemsContainer,
         BCItemsLabel,
         BCItemsCostSavingNetProdTotalTableContainer,
         BCItemsCostSavingNetProdTotalTableItemColumn,

         BCItemsCostSavingNetProdTotalTableTypeContainer,
         BCItemsCostSavingNetProdTotalTableTypeColumn,

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
         BCItemsCostSavingNetProdTotalTableTotalDisplay,

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
         BCItemsCostPerYearSeparator1,
         BCItemsCostPerYearSeparator2,
         
         BCItemsCostPerYearItemItem,
         BCItemsCostPerYearItemType,
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
         BCItemsSavingsPerYearSeparator1,
         BCItemsSavingPerYearSeparator2,

         BCItemsSavingPerYearBaselineTotal,
         BCItemsSavingPerYearYear1Total,
         BCItemsSavingPerYearYear2Total,
         BCItemsSavingPerYearYear3Total,
         BCItemsSavingPerYearYear4Total,
         BCItemsSavingPerYearYear5Total,
         BCItemsSavingPerYearTotal,
       
         BCItemsSavingPerYearItemItem,
         BCItemsSavingPerYearItemType,
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

         BCItemsNetPerYearLabel,

         BCItemsNetPerYearBaselineTotal,
         BCItemsNetPerYearYear1Total,
         BCItemsNetPerYearYear2Total,
         BCItemsNetPerYearYear3Total,
         BCItemsNetPerYearYear4Total,
         BCItemsNetPerYearYear5Total,
         BCItemsNetPerYearTotal,

         BCItemsProductionPerYearLabel,

         BCItemsProductionPerYearBaselineTotal,
         BCItemsProductionPerYearYear1Total,
         BCItemsProductionPerYearYear2Total,
         BCItemsProductionPerYearYear3Total,
         BCItemsProductionPerYearYear4Total,
         BCItemsProductionPerYearYear5Total,
         BCItemsProductionPerYearTotal,

         BCItemsProductionPerYearItemItem,
         BCItemsProductionPerYearItemType,
         BCItemsProductionPerYearItemBaseline,
         BCItemsProductionPerYearItemYear1,   
         BCItemsProductionPerYearItemYear2,              
         BCItemsProductionPerYearItemYear3,              
         BCItemsProductionPerYearItemYear4,              
         BCItemsProductionPerYearItemYear5,
         BCItemsProductionPerYearItemTotal,              
         BCItemsProductionPerYearItemAssumptionsComments,

         BCItemsProductionPerYearButtonsContainer,

         BCItemsProductionPerYearAddProductionItemButtonContainer,
         BCItemsProductionPerYearAddProductionItemButton,
         BCItemsProductionPerYearAddProductionItemButtonLabel,

         BCItemsProductionPerYearDeleteProductionItemButtonContainer,
         BCItemsProductionPerYearDeleteProductionItemButton,
         BCItemsProductionPerYearDeleteProductionItemButtonLabel,

         BCItemsTotalPerYearLabel,

         BCItemsTotalPerYearBaselineTotal,
         BCItemsTotalPerYearYear1Total,
         BCItemsTotalPerYearYear2Total,
         BCItemsTotalPerYearYear3Total,
         BCItemsTotalPerYearYear4Total,
         BCItemsTotalPerYearYear5Total,
         BCItemsTotalPerYearTotal,

         BCSItemstyledPreviousNextLinkContainer,
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
         decrementNextSavingItemID,

         addProductionItem,
         deleteProductionItem,
         incrementNextProductionItemID,
         decrementNextProductionItemID }   
  from '../actions/business_case_items'


const BusinessCaseItensScreen = () => {

  const dispatch = useDispatch(); 

  const costItems = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems);
  const nextCostItemId = useSelector(state => state.bciReducers.bciItems.bciCostItems.nextCostItemId);
  const maxCostItems = useSelector(state => state.bciReducers.bciItems.bciCostItems.maxCostItems);
  
  const savingItems = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems);
  const nextSavingItemId = useSelector(state => state.bciReducers.bciItems.bciSavingItems.nextSavingItemId);
  const maxSavingItems = useSelector(state => state.bciReducers.bciItems.bciSavingItems.maxSavingItems);

  const productionItems = useSelector(state => state.bciReducers.bciItems.bciProductionItems.productionItems);
  const nextProductionItemId = useSelector(state => state.bciReducers.bciItems.bciProductionItems.nextProductionItemId);
  const maxProductionItems = useSelector(state => state.bciReducers.bciItems.bciProductionItems.maxProductionItems);
  
  const addNewCostItem = (e) => {
    
    if(costItems.length < maxCostItems)
    {
      dispatch(addCostItem(
                {
                  id: nextCostItemId,
                  item: "exemplo",
                  cost_type: "exemplo",
                  baseline: 100,
                  year1: 100,
                  year2: 100,
                  year3: 100,
                  year4: 100,
                  year5: 100,
                  total:100,
                  assumptionsComments: "exemplo"
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
                  item: "exemplo",
                  saving_type: "exemplo",
                  baseline: 100,
                  year1: 100,
                  year2: 100,
                  year3: 100,
                  year4: 100,
                  year5: 100,
                  total:100,
                  assumptionsComments: "exemplo"
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
  
  const addNewProductionItem = (e) => {
    
    if(productionItems.length < maxProductionItems)
    {
      dispatch(addProductionItem(
                {
                  id: nextProductionItemId,
                  item: "exemplo",
                  production_type: "exemplo",
                  baseline: 100,
                  year1: 100,
                  year2: 100,
                  year3: 100,
                  year4: 100,
                  year5: 100,
                  total:100,
                  assumptionsComments: "exemplo"
                }
      ))
      dispatch(incrementNextProductionItemID())
    }
    else
      alert(`Maximum Production Items:${maxProductionItems}`)
  
    e.preventDefault()
  }

  const deleteAnProductionItem = (e) => {

    if(productionItems.length > 0)
    {
      dispatch(deleteProductionItem({id:productionItems.length-1}))
      dispatch(decrementNextProductionItemID())
    }
    e.preventDefault()
  }

  return (
      <React.Fragment>
        <BCItemsMainContainer>
          <BCItemsContainer>
            <BCItemsLabel>Business Case Itens</BCItemsLabel>
            <BCItemsCostSavingNetProdTotalTableContainer>
              <BCItemsCostSavingNetProdTotalTableItemColumn>Item</BCItemsCostSavingNetProdTotalTableItemColumn>
              
              <BCItemsCostSavingNetProdTotalTableTypeColumn>Type</BCItemsCostSavingNetProdTotalTableTypeColumn>

              <BCItemsCostSavingNetProdTotalTableBaselineContainer className="del-margin">
                <BCItemsCostSavingNetProdTotalTableBaselineColumn>Baseline</BCItemsCostSavingNetProdTotalTableBaselineColumn>
                <BCItemsCostSavingNetProdTotalTableBaselineSelect></BCItemsCostSavingNetProdTotalTableBaselineSelect>
              </BCItemsCostSavingNetProdTotalTableBaselineContainer>

              <BCItemsCostSavingNetProdTotalTableYear1Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear1Column>Year 1</BCItemsCostSavingNetProdTotalTableYear1Column>
                <BCItemsCostSavingNetProdTotalTableYear1Select></BCItemsCostSavingNetProdTotalTableYear1Select>
              </BCItemsCostSavingNetProdTotalTableYear1Container>

              <BCItemsCostSavingNetProdTotalTableYear2Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear2Column>Year 2</BCItemsCostSavingNetProdTotalTableYear2Column>
                <BCItemsCostSavingNetProdTotalTableYear2Select></BCItemsCostSavingNetProdTotalTableYear2Select> 
              </BCItemsCostSavingNetProdTotalTableYear2Container>


              <BCItemsCostSavingNetProdTotalTableYear3Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear3Column>Year 3</BCItemsCostSavingNetProdTotalTableYear3Column>
                <BCItemsCostSavingNetProdTotalTableYear3Select></BCItemsCostSavingNetProdTotalTableYear3Select> 
              </BCItemsCostSavingNetProdTotalTableYear3Container>

              <BCItemsCostSavingNetProdTotalTableYear4Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear4Column>Year 4</BCItemsCostSavingNetProdTotalTableYear4Column>
                <BCItemsCostSavingNetProdTotalTableYear4Select></BCItemsCostSavingNetProdTotalTableYear4Select> 
              </BCItemsCostSavingNetProdTotalTableYear4Container>

              <BCItemsCostSavingNetProdTotalTableYear5Container className="del-margin">
                <BCItemsCostSavingNetProdTotalTableYear5Column>Year 5</BCItemsCostSavingNetProdTotalTableYear5Column>
                <BCItemsCostSavingNetProdTotalTableYear5Select></BCItemsCostSavingNetProdTotalTableYear5Select> 
              </BCItemsCostSavingNetProdTotalTableYear5Container>

              <BCItemsCostSavingNetProdTotalTableTotalContainer className="del-margin">
                <BCItemsCostSavingNetProdTotalTableTotalColumn>Total</BCItemsCostSavingNetProdTotalTableTotalColumn>
                {/* <BCItemsCostSavingNetProdTotalTableTotalDisplay></BCItemsCostSavingNetProdTotalTableTotalDisplay> */}
              </BCItemsCostSavingNetProdTotalTableTotalContainer>

              <BCItemsCostSavingNetProdTotalTableAssumptionsCommentsContainer className="del-margin">
                <BCItemsCostSavingNetProdTotalTableAssumptionsCommentsColumn>Assumptions/Comments</BCItemsCostSavingNetProdTotalTableAssumptionsCommentsColumn>
              </BCItemsCostSavingNetProdTotalTableAssumptionsCommentsContainer>

              <BCItemsCostPerYearLabel>Costs per year</BCItemsCostPerYearLabel>

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
                    <BCItemsCostPerYearItemItem costItem={costItem}></BCItemsCostPerYearItemItem>
                    <BCItemsCostPerYearItemType costItem={costItem}></BCItemsCostPerYearItemType>
                    <BCItemsCostPerYearItemBaseline costItem={costItem}></BCItemsCostPerYearItemBaseline>
                    <BCItemsCostPerYearItemYear1 costItem={costItem}></BCItemsCostPerYearItemYear1>       
                    <BCItemsCostPerYearItemYear2 costItem={costItem}></BCItemsCostPerYearItemYear2>              
                    <BCItemsCostPerYearItemYear3 costItem={costItem}></BCItemsCostPerYearItemYear3>              
                    <BCItemsCostPerYearItemYear4 costItem={costItem}></BCItemsCostPerYearItemYear4>              
                    <BCItemsCostPerYearItemYear5 costItem={costItem}></BCItemsCostPerYearItemYear5>
                    <BCItemsCostPerYearItemTotal costItem={costItem}></BCItemsCostPerYearItemTotal>              
                    <BCItemsCostPerYearItemAssumptionsComments costItem={costItem}></BCItemsCostPerYearItemAssumptionsComments>              
                  </React.Fragment>
                )
              }             

              <BCItemsCostPerYearButtonsContainer>

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

              <BCItemsSavingPerYearLabel>Savings per year</BCItemsSavingPerYearLabel>
              
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
                    <BCItemsSavingPerYearItemItem savingItem={savingItem}></BCItemsSavingPerYearItemItem>
                    <BCItemsSavingPerYearItemType savingItem={savingItem}></BCItemsSavingPerYearItemType>
                    <BCItemsSavingPerYearItemBaseline savingItem={savingItem}></BCItemsSavingPerYearItemBaseline>
                    <BCItemsSavingPerYearItemYear1 savingItem={savingItem}></BCItemsSavingPerYearItemYear1>       
                    <BCItemsSavingPerYearItemYear2 savingItem={savingItem}></BCItemsSavingPerYearItemYear2>              
                    <BCItemsSavingPerYearItemYear3 savingItem={savingItem}></BCItemsSavingPerYearItemYear3>              
                    <BCItemsSavingPerYearItemYear4 savingItem={savingItem}></BCItemsSavingPerYearItemYear4>              
                    <BCItemsSavingPerYearItemYear5 savingItem={savingItem}></BCItemsSavingPerYearItemYear5>
                    <BCItemsSavingPerYearItemTotal savingItem={savingItem}></BCItemsSavingPerYearItemTotal>              
                    <BCItemsSavingPerYearItemAssumptionsComments savingItem={savingItem}></BCItemsSavingPerYearItemAssumptionsComments>
                  </React.Fragment>          
                )
              }

              <BCItemsSavingPerYearButtonsContainer>

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

              <BCItemsNetPerYearLabel>Net impact</BCItemsNetPerYearLabel>

              <BCItemsNetPerYearBaselineTotal></BCItemsNetPerYearBaselineTotal>
              <BCItemsNetPerYearYear1Total></BCItemsNetPerYearYear1Total>
              <BCItemsNetPerYearYear2Total></BCItemsNetPerYearYear2Total>
              <BCItemsNetPerYearYear3Total></BCItemsNetPerYearYear3Total>
              <BCItemsNetPerYearYear4Total></BCItemsNetPerYearYear4Total>
              <BCItemsNetPerYearYear5Total></BCItemsNetPerYearYear5Total>
              <BCItemsNetPerYearTotal></BCItemsNetPerYearTotal>
              <div style={{borderBottom: "0.1rem solid #808080"}}></div>
              

              <BCItemsProductionPerYearLabel>Production effect</BCItemsProductionPerYearLabel>
              
              <BCItemsProductionPerYearBaselineTotal></BCItemsProductionPerYearBaselineTotal>
              <BCItemsProductionPerYearYear1Total></BCItemsProductionPerYearYear1Total>
              <BCItemsProductionPerYearYear2Total></BCItemsProductionPerYearYear2Total>
              <BCItemsProductionPerYearYear3Total></BCItemsProductionPerYearYear3Total>
              <BCItemsProductionPerYearYear4Total></BCItemsProductionPerYearYear4Total>
              <BCItemsProductionPerYearYear5Total></BCItemsProductionPerYearYear5Total>
              <BCItemsProductionPerYearTotal></BCItemsProductionPerYearTotal>
              <div style={{borderBottom: "0.1rem solid #808080"}}></div>

              {
                productionItems.map(productionItem =>
                  <React.Fragment>
                    <BCItemsProductionPerYearItemItem productionItem={productionItem}></BCItemsProductionPerYearItemItem>
                    <BCItemsProductionPerYearItemType productionItem={productionItem}></BCItemsProductionPerYearItemType>
                    <BCItemsProductionPerYearItemBaseline productionItem={productionItem}></BCItemsProductionPerYearItemBaseline>
                    <BCItemsProductionPerYearItemYear1 productionItem={productionItem}></BCItemsProductionPerYearItemYear1>       
                    <BCItemsProductionPerYearItemYear2 productionItem={productionItem}></BCItemsProductionPerYearItemYear2>              
                    <BCItemsProductionPerYearItemYear3 productionItem={productionItem}></BCItemsProductionPerYearItemYear3>              
                    <BCItemsProductionPerYearItemYear4 productionItem={productionItem}></BCItemsProductionPerYearItemYear4>              
                    <BCItemsProductionPerYearItemYear5 productionItem={productionItem}></BCItemsProductionPerYearItemYear5>
                    <BCItemsProductionPerYearItemTotal productionItem={productionItem}></BCItemsProductionPerYearItemTotal>              
                    <BCItemsProductionPerYearItemAssumptionsComments productionItem={productionItem}></BCItemsProductionPerYearItemAssumptionsComments>
                  </React.Fragment>          
                )
              }

              <BCItemsProductionPerYearButtonsContainer>

              <BCItemsProductionPerYearAddProductionItemButtonContainer>
                <BCItemsProductionPerYearAddProductionItemButton onClick={ addNewProductionItem }></BCItemsProductionPerYearAddProductionItemButton>
                <BCItemsProductionPerYearAddProductionItemButtonLabel>
                  Add item
                </BCItemsProductionPerYearAddProductionItemButtonLabel>
              </BCItemsProductionPerYearAddProductionItemButtonContainer>

              <BCItemsProductionPerYearDeleteProductionItemButtonContainer>
                <BCItemsProductionPerYearDeleteProductionItemButton onClick={ deleteAnProductionItem }></BCItemsProductionPerYearDeleteProductionItemButton>
                <BCItemsProductionPerYearDeleteProductionItemButtonLabel>
                  Delete item
                </BCItemsProductionPerYearDeleteProductionItemButtonLabel>
              </BCItemsProductionPerYearDeleteProductionItemButtonContainer>

              </BCItemsProductionPerYearButtonsContainer>
              
              <BCItemsTotalPerYearLabel>Total effect</BCItemsTotalPerYearLabel>

              <BCItemsTotalPerYearBaselineTotal></BCItemsTotalPerYearBaselineTotal>
              <BCItemsTotalPerYearYear1Total></BCItemsTotalPerYearYear1Total>
              <BCItemsTotalPerYearYear2Total></BCItemsTotalPerYearYear2Total>
              <BCItemsTotalPerYearYear3Total></BCItemsTotalPerYearYear3Total>
              <BCItemsTotalPerYearYear4Total></BCItemsTotalPerYearYear4Total>
              <BCItemsTotalPerYearYear5Total></BCItemsTotalPerYearYear5Total>
              <BCItemsTotalPerYearTotal></BCItemsTotalPerYearTotal>
              <div style={{borderBottom: "0.1rem solid #808080"}}></div>          

            </BCItemsCostSavingNetProdTotalTableContainer>

            <BCSItemstyledPreviousNextLinkContainer>
                <BCItemsStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/business_case"} > Previous </BCItemsStyledPreviousLink>
                <BCItemsStyledNextLink to={process.env.PUBLIC_URL + "/create_project/resource_plan"} > Next </BCItemsStyledNextLink>
            </BCSItemstyledPreviousNextLinkContainer>

          </BCItemsContainer>
        </BCItemsMainContainer>
      </React.Fragment>
  )
}

export default BusinessCaseItensScreen