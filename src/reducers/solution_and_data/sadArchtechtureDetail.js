const sadArchtechtureDetail = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_ARCHTECHTURE_DETAIL':
      return action.text
    default:
      return state
  }
}

export default sadArchtechtureDetail