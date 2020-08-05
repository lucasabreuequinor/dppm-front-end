const sadOperationalRunbookFollowUp = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_OPERATIONAL_RUNBOOK_FOLLOW_UP':
      return action.text
    default:
      return state
  }
}

export default sadOperationalRunbookFollowUp