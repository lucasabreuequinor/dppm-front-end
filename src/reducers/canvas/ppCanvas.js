const ppCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_PP_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default ppCanvas