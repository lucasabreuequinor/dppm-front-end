const cpLeader = (state = "", action) => {
  switch(action.type){
    case 'CHANGE_PROJECT_LEADER':
      return action.text
    default:
      return state
  }
}

export default cpLeader