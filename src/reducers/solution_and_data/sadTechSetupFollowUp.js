const sadTechSetupFollowUp = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_TECH_SETUP_FOLLOW_UP':
      return action.text
    default:
      return state
  }
}

export default sadTechSetupFollowUp
