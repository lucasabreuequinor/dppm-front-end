const sadArchtechtureDiagram = (state = "https://picsum.photos/600", action) => {
  switch(action.type){
    case 'CHANGE_ARCHTECHTURE_DIAGRAM':
      return action.file
    default:
      return state
  }
}

export default sadArchtechtureDiagram