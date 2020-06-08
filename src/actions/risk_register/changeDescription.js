const changeDescription = (risk) => {
  return {
    type: 'CHANGE_RISK_DESCRIPTION',
    description: risk.description,
    id: risk.id

  }
}

export default changeDescription