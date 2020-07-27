const sadCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_SAD_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default sadCanvas