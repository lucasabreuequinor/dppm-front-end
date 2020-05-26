const bcApprovedBy = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_APPROVED_BY':
      return action.text
    default:
      return state
  }
}

export default bcApprovedBy