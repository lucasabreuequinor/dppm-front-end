const bcKeyAssumptions = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_KEY_ASSUMPTIONS':
      return action.text
    default:
      return state
  }
}

export default bcKeyAssumptions