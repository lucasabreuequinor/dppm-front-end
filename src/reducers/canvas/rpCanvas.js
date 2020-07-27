const rpCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_RP_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default rpCanvas