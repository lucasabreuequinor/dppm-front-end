const sadSolutionOverview = (state = "inicio", action) => {
  switch(action.type){
    case 'CHANGE_SOLUTION_OVERVIEW':
      return action.text
    default:
      return state
  }
}

export default sadSolutionOverview
