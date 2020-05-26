const chBy = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_BY':
      return action.text
    default:
      return state
  }
}

export default chBy