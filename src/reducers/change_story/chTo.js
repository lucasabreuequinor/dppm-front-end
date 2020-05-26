const chTo = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_TO':
      return action.text
    default:
      return state
  }
}

export default chTo