const lpcmCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_LPCM_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default lpcmCanvas