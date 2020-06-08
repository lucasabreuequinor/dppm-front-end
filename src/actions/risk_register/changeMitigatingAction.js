const changeMitigatingAction = (risk) => {
  return {
    type: 'CHANGE_RISK_MITIGATING_ACTION',
    mitigating_action: risk.mitigating_action,
    id: risk.id

  }
}

export default changeMitigatingAction