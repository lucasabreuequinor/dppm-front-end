const sadOperationalRunbookReviewedBy = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_OPERATIONAL_RUNBOOK_REVIEWED_BY':
      return action.text
    default:
      return state
  }
}

export default sadOperationalRunbookReviewedBy