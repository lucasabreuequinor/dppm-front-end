const chTo = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_TO':
      return action.text
    default:
      return state
  }
}

export default chTo