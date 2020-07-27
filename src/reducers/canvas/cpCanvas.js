const cpCanvas = (state = 'jejeje', action) => {
  switch(action.type){
    case 'CHANGE_CP_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default cpCanvas