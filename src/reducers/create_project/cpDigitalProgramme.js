const cpDigitalProgramme = (state = "", action) => {
  switch(action.type){
    case 'CHANGE_DIGITAL_PROGRAMME':
      return action.text
    default:
      return state
  }
}

export default cpDigitalProgramme