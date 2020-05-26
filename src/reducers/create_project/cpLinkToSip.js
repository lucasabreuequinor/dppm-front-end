const cpLinkToSip = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_LINK_TO_SIP':
      return action.text
    default:
      return state
  }
}

export default cpLinkToSip