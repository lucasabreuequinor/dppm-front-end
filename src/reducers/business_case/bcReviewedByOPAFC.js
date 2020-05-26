const bcReviewedByOPAFC = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_REVIEWED_BY_OPA_FC':
      return action.text
    default:
      return state
  }
}

export default bcReviewedByOPAFC