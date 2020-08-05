const bcReviewedByOPAFC = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_REVIEWED_BY_OPA_FC':
      return action.text
    default:
      return state
  }
}

export default bcReviewedByOPAFC