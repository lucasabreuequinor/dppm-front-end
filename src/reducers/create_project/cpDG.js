const cpDG = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_DG':
      return action.text
    default:
      return state
  }
}

export default cpDG