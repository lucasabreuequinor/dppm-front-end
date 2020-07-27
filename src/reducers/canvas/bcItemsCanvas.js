const bcItemsCanvas = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_BCITEMS_CANVAS':
      return action.canvas
    default:
      return state
  }
}

export default bcItemsCanvas