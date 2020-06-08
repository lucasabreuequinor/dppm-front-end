const changeImpact = (risk) => {
  return {
    type: 'CHANGE_RISK_IMPACT',
    impact: risk.impact,
    id: risk.id

  }
}

export default changeImpact