const chCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_CH_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default chCanvas