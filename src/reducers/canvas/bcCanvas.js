const bcCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_BC_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default bcCanvas