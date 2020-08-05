const sadArchContractFollowUp = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_ARCH_CONTRACT_FOLLOW_UP':
      return action.text
    default:
      return state
  }
}

export default sadArchContractFollowUp