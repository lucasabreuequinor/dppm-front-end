const cpApprover = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_APPROVER':
      return action.text
    default:
      return state
  }
}

export default cpApprover