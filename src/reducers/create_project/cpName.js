const cpName = (state = "", action) => {
  switch(action.type){
    case 'CHANGE_PROJECT_NAME':
      return action.text
    default:
      return state
  }
}

export default cpName