const sadOperationalRunbookStatus = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_OPERATIONAL_RUNBOOK_STATUS':
      return action.text
    default:
      return state
  }
}

export default sadOperationalRunbookStatus