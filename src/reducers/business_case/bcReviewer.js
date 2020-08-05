const bcReviewer = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_REVIEWER':
      return action.text
    default:
      return state
  }
}

export default bcReviewer