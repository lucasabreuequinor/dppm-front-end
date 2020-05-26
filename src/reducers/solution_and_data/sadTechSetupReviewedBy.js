const sadTechSetupReviewedBy = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_TECH_SETUP_REVIEWED_BY':
      return action.text
    default:
      return state
  }
}

export default sadTechSetupReviewedBy
