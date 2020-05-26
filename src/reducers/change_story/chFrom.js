const chFrom = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_FROM':
      return action.text
    default:
      return state
  }
}

export default chFrom