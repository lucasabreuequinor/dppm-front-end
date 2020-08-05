const sadArchContractStatus = (state = "test", action) => {
  switch(action.type){
    case 'CHANGE_ARCH_CONTRACT_STATUS':
      return action.text
    default:
      return state
  }
}

export default sadArchContractStatus