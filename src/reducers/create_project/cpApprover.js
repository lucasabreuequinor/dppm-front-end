const cpApprover = (state = "", action) => {
  switch(action.type){
    case 'CHANGE_APPROVER':
      return action.text
    default:
      return state
  }
}

export default cpApprover