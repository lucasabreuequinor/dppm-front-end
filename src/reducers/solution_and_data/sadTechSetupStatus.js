const sadTechSetupStatus = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_TECH_SETUP_STATUS':
      return action.text
    default:
      return state
  }
}

export default sadTechSetupStatus
