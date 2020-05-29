const deleteKPI = (kpi) => {
  return {
    type: 'DELETE_KPI',
    id: kpi.id
  }
}

export default deleteKPI
