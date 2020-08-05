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

import { Page, Text, View, Image, Document, StyleSheet, PDFViewer, Font, pdf } from '@react-pdf/renderer';  

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

  const generatePDF = () => {

    Font.register({ family: 'Montserrat', fonts: [
      { src: "https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
        fontWeight: 'normal',
      },
      { src: "https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.ttf",
        fontWeight: 'bold',
      }
     ]});
     
    
    const styles = StyleSheet.create({
      pageOne: {
       
      },
     
      container:{
        fontFamily:'Montserrat',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
        height:'100%',
        fontSize:'13',
        color: '#2b2b2b',
        paddingTop:'25',
        paddingBottom:'25',
        paddingLeft:'50',
        paddingRight:'50',
      },
     
      header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:'8%',
      },
     
      headerProjectName:{
        fontSize: '28',
        fontWeight:'bold',
        flexBasis: '80%',
        textOverflow:'hidden',
      },
     
      headerLogoEquinor: {
        width: '80',
        height:'auto',
      },
     
      sectionOne: {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        height:'8.5%',
    
      },
     
      sectionOneLeft: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexBasis: '25%',
      
      },
     
      sectionOneLeftTop: {
    
      },
    
      sectionOneLeftTopProjectLeaderLabel: {
        fontSize: '14'
      },
    
      sectionOneLeftTopProjectLeader: {
        fontSize:'15',
        fontWeight: 'bold',
        maxLines: '1',
        textOverflow: 'ellipsis'
      },
     
      sectionOneLeftBottom: {
       
      },
    
      sectionOneLeftBottomDecisionGateLabel:{
        fontSize: '14'
      },
    
      sectionOneLeftBottomDecisionGate:{
        fontSize: '15',
        fontWeight: 'bold',
        maxLines: '1',
        textOverflow: 'ellipsis'
      },
     
      sectionOneRight: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '67%'    
      },
    
      sectionOneRightSolutionOverviewLabel: {
        fontSize: '16',
        paddingBottom: '3'
      },
    
      sectionOneRightSolutionOverview: {
        fontSize: '12',
        maxLines: '5',
        textOverflow: 'ellipsis'
      },
       
      sectionTwo: {
        display: 'flex',
        flexDirection: 'column',
        height:'24.5%',

    
      },
    
      sectionTwoTopChangeStoryLabel:{
        fontSize: '16',
        paddingBottom: '3'
      },
       
      sectionTwoBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: '1',   

      },
     
      sectionTwoBottomLeft: {
        flexBasis: '30.3%',
      },
    
      sectionTwoBottomLeftFromLabel: {
        fontSize: '14',
        paddingBottom: '3'
      },
    
      sectionTwoBottomLeftFrom: {
        fontSize: '12',
        maxLines: '16',
        textOverflow: 'ellipsis'
      },
     
      sectionTwoBottomMiddle: {
        flexBasis: '30.3%',
      },
    
      sectionTwoBottomMiddleByLabel: {
        fontSize: '14',
        paddingBottom: '3'
      },
    
      sectionTwoBottomMiddleBy: {
        fontSize: '12',
        maxLines: '16',
        textOverflow: 'ellipsis'
      },
     
      sectionTwoBottomRight: {
        flexBasis: '30.3%',
      },
    
      sectionTwoBottomRightToLabel: {
        fontSize: '14',
        paddingBottom: '3'   
      },
     
      sectionTwoBottomRightTo: {
        fontSize: '12',
        maxLines: '16',
        textOverflow: 'ellipsis'
      },
    
      sectionThree: {
        display: 'flex',
        flexDirection: 'column',
        height:'24.5%',
      },
    
      sectionThreeTopBusinessCaseLabel: {
        fontSize: '16',
        paddingBottom: '3'
      },
     
      sectionThreeBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: '1',
    
      },
     
      sectionThreeBottomLeft: {
        flexBasis: '50%',
        paddingBottom: '3'
       
      },
    
      sectionThreeBottomLeftKeyAssumptionsLabel:{
        fontSize: '14',
        paddingBottom: '3'
      },
    
      sectionThreeBottomLeftKeyAssumptions:{
        paddingRight: '25',
        fontSize: '12',
        maxLines: '16',
        textOverflow: 'ellipsis'
      },
     
      // 485 x 262
      sectionThreeBottomRight: {
        width: '369',
        height: '256',
 
      },
    
      sectionThreeBottomRightCashflowImpactLabel:{
        height:'10%',
        fontSize: '14',
      },
    
      sectionThreeBottomRightCashflowImpactGraphicContainer: {
        height: '90%',
      },

      sectionThreeBottomRightCashflowImpactGraphic: {
        width: '100%',
        height:'100%',
        objectFit: 'contain',
        // objectPositionX: '0',
        // objectPositionY: '5'

      },
       
      sectionFour: {
        height:'14.5%',
      },

      sectionFourBusinessCaseItemsTable: {
        width: '100%',
        height:'100%',
        objectFit: 'contain',
        // objectPositionX: '0',
        // objectPositionY: '5'

      },


      footer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems: 'flex-end',
        height: '4%',
      }
     
    });
    
    
    // MARCACOES DE LETRA W INDICAM POSTERIORMENT QUANTOS CARACTERES EU PRECISO
    
    const doc = (
      <Document>
        <Page size="A3" style={styles.pageOne} >
    
          <View style={styles.container}>
             
              <View style={styles.header}>
                {/* MAXIMO LETRAS: 12 W's */}
                <Text style={styles.headerProjectName}>Pre Salt Analytics</Text>
                <Image
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAOOAosDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiorq6hsreW4uJY4IIlLySysFVFAySSeAB60DSbdkS15h8bv2ifB/wH0kT69e+dqcqFrXSbUhrmf3x/Cuf4mwPqeK+d/2iv8AgoJZaILnQfhkY9Sv+Y5fEEqbreE9P3Cn/WMP7x+T0Dg18D67r2peKNWutU1e+uNS1G6fzJrq6kMkkjepJr5LMc+p0L08N70u/Rf5/kf0Lwd4T4vNOXG53elR3UNpy9f5F6+95LRnsPxk/bA+Ifxcv50/tafw7oRY+VpWlymJQvpJIuGkPrk4z0AryTSfFet6BfLe6ZrGoadeK25bi0unikBHcMpBzWVRXwNXEVq0/aVJNs/rXA5Pl+W4ZYTCUIwp7WSWvr3fdu7fU+7f2T/25tS1DXbPwd8SLxbpbxxDY6/IAjpISAsc+AAVPQSdQfvZB3L941+ENfqh+z3+1B4f1j4M+FZ/FOtRxa+lqbe635ZnaJ2jDse7MqKx92Nfb5HmkqidDES21Tf5H8u+KXAlLBzp5rk1Gym+WcIrROzakktk7NO2l7dz6Oooor7Q/mYKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopskiwxs7sqIo3MzHAAHUk18dftGft+aX4R+0aB8OWh1vWVykussN9pbnoRGP+Wre/3Bxy3IHHisXRwcOetK35v0PpMi4ezLiTFLC5dScn1e0YrvJ9F+L6Js+gvjL8e/CHwM0P7d4jvwLqQH7Nptvh7m4P+yueB6scAeueK/NX9oD9rTxf8d7iWzmlOieGA2Y9HtXO18HIMzcGRunoo7AV5L4m8U6v4z1q51fXdRuNV1K4bdLc3Uhd29vYDsBwO1ZVfnOYZxWxt4R92Hbv6/5H9n8H+G2W8MqOJr2rYn+ZrSP+BdP8T17W2Ciiivnj9gCiiigAq5BqlxbxLGjYVenJ/wAap0U722JlFS0aP3eooor9yP8AK4KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKQkKCTwKAFrhfiz8avCXwV0E6n4n1NLUsD9ns48PcXLDtGnU/U4A7kV4D+0V+3tongE3WheBPI8ReIFJjk1DO6ytW9iP9aw9B8o9T0r88/GHjTXPH2vXOteIdTuNV1O4bMlxcNk/QDoqjsowB2r5XMc8p4a9Oh70vwX+Z+98HeFWNzrlxmbXo0N0vty+T+Feb17Lqey/tC/ti+LfjhJPplq7+HfCROBpltId9wvrO4+//ujC+xIzXgFFFfn1fEVcTN1Ksrs/sHK8pwOS4aODy+kqcF0XXzb3b83qFFFFc564UUUUAFFFFABRRRQB+71FFFfuZ/lYFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUV8r/tGft0+H/hitzong82/iXxOuUeZW3Wdoeh3MD87A/wAKnA7kdDy4jFUsJD2laVl/Wx72TZHmHEGKWEy6k5y69ku8nsl6/LU95+JvxY8LfCDw8+seKdUj0+25EUX3pp2/uxoOWP6DqSBzX5wftEftreKPjL9p0bRvN8M+EnyjWsMn+kXa9P3zjsR/yzXjnktwa8R8efELxF8TPEE2teJtVn1bUJePMmb5UXOdqKOFUegAFc7X53mGd1sXenS92H4v1/yP7J4P8MMv4e5cXjrVsStbte7F/wB1Pd/3nr2SCiiivmj9sCiiigAooooAKKKKACiiigAooooA/d6iiiv3M/ysCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArmfiB8SPDfwt8PS634n1WDSrCPgNKcvK2M7I0HzO3sATXhv7RH7b3hj4RfatF8P+V4m8VplGijfNtaN/01cdWB/gXn1K1+cnxI+KXif4teIpNa8UarNqV42RGrHEUC/wByNBwi+w69Tk181mGd0sJenS96f4L1/wAj9v4P8L8w4g5cXmF6GHeu3vyX91PZf3n8kz3T9oz9uLxF8WPtGh+FxP4Z8KNlH2vi7vF/6aMPuKf7in1yW6D5goor87xGJq4qftK0rs/sjJ8ky/IcKsHl1JQgvvb7t7t+b/IKKKK5T3AooooAKKKKACiiigAooooAKKKKACiiigD93qKKK/cz/KwKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoor55/aG/bM8KfBSO40vTzH4k8WKCo0+CT91bt6zuOhH9wfNxztzmueviKWGg6lWVkexlWUY7O8THB5fSdSb6Lp5t7Jeb0PaPG3jrQPhz4fuNc8Sapb6RpkA+aedup7KqjlmPZVBJ9K/O79or9u/X/AIjm60PwV5/hvw2xKPdZ23t2vTkg/u1Popz6ntXg3xU+Mfiz4za+dW8U6pJeyKSILVPkt7ZT/DHH0UdOeScDJNcTX57mOeVcTenQ92H4v/I/sPg3wswOR8uMzW1bEbpfYg/JP4n5v5JPUUksSTyaSiivlj94CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/d6iiiv3M/wArAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKx/FnjDRfAuhXOs+INSt9J0u3GZLm5faoz0A7knsBkntXkP7QP7XnhD4FwzWHmLr/irb8mkWkg/dHHBnfkRjpxyxz0xzX5rfGD45eLvjfrx1LxNqLSxIxNtp8JKWtqD2jTPB9WOWOOSa+ezDOaODvCHvT7dF6/5H7Hwf4a5lxK44rE3o4b+Zr3pL+4n/6U9O19j3/9oz9vjWPHH2nQfh+Z9A0JspLqbfJeXI6fLg/ukPt8x9RyK+Q3dpHZ3YszHJZjkk+tNor85xWLrYyftK0rv8vQ/s7I+H8u4dwywuXUlCPV/ak+8nu3+XSyCiiiuM+iCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP3eooor9zP8AKwKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoorxj4/ftU+EPgLYvBeTDWPErpug0S0kHmc9GlbkRL7kZPYHmsa1anh4OpVlZI9LLstxmbYmOEwNJ1KktkvzfRLu3oup6r4j8SaV4R0W61bWr+DTNNtl3zXNy4REH19fbqa+Av2if8AgoFqPiM3Wg/Dcy6TpeTHJrkg23M46fuh/wAslP8AePzdPu188/Gj9oDxh8dNaN34ivytjG5a10q2JW2ts8fKueWx/E2T+HFebV+f5jn1Svenhvdj36v/ACP6+4O8KMHlPLjM6tWrbqO8I/8AyT9dOye5JcXEt1PJNPI800jFnkkYszE9SSepqOiivkz+gkrKyCiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP3eooor9zP8AKwKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACqOta5p/hvS7nUtVvYNO0+2TfNc3MgSNF9STxXmPx2/ab8HfAXTj/AGrdDUNdkXdb6JZuDcPnoz/880/2m684BxivzR+OP7SHjD48aqZdbu/sukxvuttHtWYW8XXBIz874P3jz6YHFeDmGb0cDeC96fbt6n6zwf4dZnxQ44ia9lhv52tZf4F19dvNvQ+jv2if+Cg09/8AadB+GJe1t+Y5fEMyYkfsfIQj5R/tsM88Ada+JL6+udSvJru8uJbq6mcySzzuXeRiclmY8kk9zUFFfnGLxtbGz56zv5dF6H9o8P8ADOWcM4b6vl1PlvvJ6yl/if6bLokFFFFcJ9SFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfu9RRRX7mf5WBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFeXfG79orwf8CNHM+uXon1SRC1rpFswa4nOOOP4F/wBpuPTJ4rKpVhRg51HZI7sD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huFcEoL4k5P1cmwooorxT9LCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/d6iiiv3M/ysCiiigAooooAKKKKACvw/8AH3/I9+I/+wlc/wDo1q/cCvw/8ff8j34j/wCwlc/+jWr4nib4KXq/0P6f8Dv94x/+GH5yMGiiivgj+tAooooAKKKKAPpj9nf9t/xR8Ifsui+IfO8U+E0wiwyPm7tF6fuXY/MoH/LNjjgAFK/Rz4c/FDwz8WPDseteFtVh1Syb5XCcSQt/ckQ/MjexHuMjmvxLrqfh38TfE3wp8Qxa14X1afS71SN4jbMcyg52SIeHX2I9+tfTZdndXCWp1veh+K9P8j8P4x8L8v4g5sXl9qOIev8Acm/7yWz/ALy+aZ+2tFfMv7Of7b3hr4vG10TxGIfDHi58KsbNizu2/wCmLscqx/uMc8gAt2+mq/RMPiaWKh7SjK6P43zjJcfkOKeDzGk4TXfZruns15oKKKK6TxAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPzY/wCClv8AyW7w/wD9i7D/AOlNzXyRX1v/AMFLf+S3eH/+xdh/9KbmvkivyLNv9+q+p/ol4f8A/JL4D/B+rCiiivJP0EKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD93qKKK/cz/KwKKKKACiiigAooooAK/D/wAff8j34j/7CVz/AOjWr9wK/D/x9/yPfiP/ALCVz/6NavieJvgper/Q/p/wO/3jH/4YfnIwaKKK+CP60CiiigAooooAKKKKACvqr9nX9u3xD8Mvs2h+MhceJ/DC4jjnLbr2zUcAKxP7xR/dY5HGGAGD8q0V14bFVsJP2lGVn/W54OdZHl/EGFeEzGkpx6d0+8Xun6ej0P288B/ELw78TPD0Gt+GNVt9X02XjzITyjYyUdT8yMMj5WAPNdFX4o/DH4teKfg/4hTWPC2qy6dcZUTQ/ehuVB+5Kh4Ycn3Gcgg81+kn7O37aHhb41/Z9H1Py/DXi98IthNITDdnHWCQjk/7DfN6bsE1+iZdnVLGWp1fdn+D9P8AL8z+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rtzW0LFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoqtqWpWmj2FxfX91DZWVuhkmuLiQJHGo6szHgAepr4e/aJ/4KEJD9p0D4X4eTJjl8RTx5Uev2eNhz/vsMeinhq4MXjqGChz1n8urPq+HuF804nxH1fLqd0t5PSMfV/ort9EfRnx3/AGnfB3wF09l1S5/tDXpE3W+i2jAzvnoz9o09z17A1+aPxw/aO8YfHjVmm1u8NtpMb7rXR7VitvD6HH8bf7Tc+mBxXm+qapea3qFxf6jdz319cOZJrm5kMkkjHqzMTkn3NVa/OMwzavjny/DDt/n3P7T4Q8Pcs4Viq7XtcR1m1t/gX2fXd97aHv8A+wnql1p37TnhaG3laOK9ju7e4UdJI/s0j7T7bo0P1UV+r9fkr+xB/wAnReCP968/9I56/Wqvq+G3/skv8T/JH8/+NUVHiGi0t6Mf/S6gUUUV9WfgIUUUUAFFFFABRRRQB8H/APBSX4ra1p2paD4DsbqSz0u6sv7Rvlhcr9p3SMiI+Oqr5bHHQkj+6K+R/hT8ZPFnwX8QLq3hbU3s5DxNayfPb3C/3ZI+h+vBHYivoH/gpb/yW7w//wBi7D/6U3NfJFflOa1qizCc1Jpp6eR/f/AOWYKpwjhcPUpRlCpFuSaTUm2737/8Bdj9Wv2ef2yvCfxuW30q+KeG/FzAL/Z1xIPLum7mBz97/cOGHbcBmvoSvwjR2jdXRirKchlOCD619ffs7ft+az4La10H4hGfxBoYIjj1YfNe2o6ZfP8ArlHv8455bha+gy/iBStTxej/AJv8/wDM/HuMfCKpR5sbw770d3Sb1X+Bvf8AwvXs3sfo9RWP4T8XaL460G21rw/qdvq2l3K7o7m2fcp9Qe6sO6nBB4IFbFfaxkpK8XdH8y1Kc6M3TqRcZLRp6NPs0FFFFMzCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiig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"
                  style={ styles.headerLogoEquinor }
                  >
                </Image>
              </View>
    
              <View style={styles.sectionOne}>
                <View style={styles.sectionOneLeft}>
                
                  <View style={styles.sectionOneLeftTop}>
                    <Text style={styles.sectionOneLeftTopProjectLeaderLabel}>Project leader:</Text>
                    {/* MAXIMO LETRAS: 7 W's */}
                    <Text style={styles.sectionOneLeftTopProjectLeader}>Anderson Lima</Text>
                  </View>
                 
                  <View style={styles.sectionOneLeftBottom}>
                    <Text style={styles.sectionOneLeftBottomDecisionGateLabel}>Decision Gate</Text>
                    {/* MAXIMO LETRAS: SAFE */}
                    <Text style={styles.sectionOneLeftBottomDecisionGate}>DG4</Text>
                  </View>
                 
                </View>
               
                <View style={styles.sectionOneRight}>
                  <Text style={styles.sectionOneRightSolutionOverviewLabel}>Solution Overview:</Text>
                  <Text style={styles.sectionOneRightSolutionOverview}>
                  Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                  fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                  digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                  Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                  Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                  </Text>
                </View>
               
              </View>
              <View style={styles.sectionTwo}>
                <Text style={styles.sectionTwoTopChangeStoryLabel}>Change Story</Text>
                <View style={styles.sectionTwoBottom}>
    
                  <View style={styles.sectionTwoBottomLeft}>
                    <Text style={styles.sectionTwoBottomLeftFromLabel}>From:</Text>
                    <Text style={styles.sectionTwoBottomLeftFrom}>
                      Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                      fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                    </Text>
                  </View>
                 
                  <View style={styles.sectionTwoBottomMiddle}>
                    <Text style={styles.sectionTwoBottomMiddleByLabel}>By:</Text>
                    <Text style={styles.sectionTwoBottomMiddleBy}>
                      Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                      fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                    </Text>
                  </View>
                 
                  <View style={styles.sectionTwoBottomRight} >
                    <Text style={styles.sectionTwoBottomRightToLabel}>To:</Text>
                    <Text style={styles.sectionTwoBottomRightTo}>
                      Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                      fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                    </Text>
                  </View>
                 
                </View>
              </View>
    
              <View style={styles.sectionThree}>
    
                <Text style={styles.sectionThreeTopBusinessCaseLabel}>Business Case</Text>
                <View style={styles.sectionThreeBottom}>
                 
                  <View style={styles.sectionThreeBottomLeft}>
                  <Text style={styles.sectionThreeBottomLeftKeyAssumptionsLabel}>Key Assumptions:</Text>
                    <Text style={styles.sectionThreeBottomLeftKeyAssumptions}>
                      Os CI têm permitido processadores cada vez mais complexos para serem concebidos e 
                      fabricados em tamanhos da ordem de nanômetros. Tanto a miniaturização como a padronização dos processadores têm aumentado a presença destes dispositivos 
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                      digitais na vida moderna, muito além da aplicação limitada dedicada a computadores. 
                      Os microprocessadores modernos aparecemem tudo, desde automóveis até celulares e brinquedos para crianças.
                      Em máquinas grandes, CPUs podem exigir uma ou mais placas de circuito impresso.
                    </Text>
                  </View>
                 
                  <View style={styles.sectionThreeBottomRight} >
                    <Text style={styles.sectionThreeBottomRightCashflowImpactLabel}>
                      Cashflow Impact in MUSD, before tax; Equinor share
                    </Text>
                    <View style={styles.sectionThreeBottomRightCashflowImpactGraphicContainer}>
                      <Image
                          style={styles.sectionThreeBottomRightCashflowImpactGraphic}
                          src={window.canvasObject[3].canvas}
                          >
                      </Image>
                    </View>
                   
                  </View>
                </View>
              </View>
    
              <View style={styles.sectionFour}>
                  <View style={styles.sectionFourBusinessCaseItemsContainer}>
                    <Image 
                      style={styles.sectionFourBusinessCaseItemsTable}
                      src={window.canvasObject[4].canvas}
                      >
                    </Image>
                  </View>
              </View>

              <View style={styles.footer}>
                <Text>{`Created on ${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</Text>
              </View>
             
          </View>
    
        </Page>
      </Document>
    );
    
    const PDFA3 = pdf(doc).toBlob();

    PDFA3.then((blob) => {
      console.log(blob);
      var downloadLink = document.getElementById('pdf-download-link');
      downloadLink.href = URL.createObjectURL(blob) 
    })  

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
          <button onClick={ generatePDF }>
            save legal pdf
          </button>
          <a target="_blank" id="pdf-download-link" title="Download PDF File">Download PDF file</a>
        </LPCMMainContainer>

      </React.Fragment>
  )
}

export default LegalPlanChangeMgmtScreen