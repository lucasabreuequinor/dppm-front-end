const addRisk = (risk) => {

  return {
    type: 'ADD_RISK',
    id: risk.id,
    description: risk.description,
    impact: risk.impact,
    mitigating_action: risk.mitigating_action
  }
}

export default addRisk
