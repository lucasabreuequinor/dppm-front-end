const rrCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_RR_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default rrCanvas