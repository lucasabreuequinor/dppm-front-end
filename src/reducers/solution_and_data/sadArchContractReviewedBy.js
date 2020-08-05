const sadArchContractReviewedBy = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_ARCH_CONTRACT_REVIEWED_BY':
      return action.text
    default:
      return state
  }
}

export default sadArchContractReviewedBy