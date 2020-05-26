const sadMakeOrBuy = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_MAKE_OR_BUY':
      return action.text
    default:
      return state
  }
}

export default sadMakeOrBuy