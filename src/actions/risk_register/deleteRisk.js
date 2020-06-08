const deleteRisk = (risk) => {
  return {
    type: 'DELETE_RISK',
    id: risk.id
  }
}

export default deleteRisk
