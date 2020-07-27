const bcrpCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_BCRP_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default bcrpCanvas