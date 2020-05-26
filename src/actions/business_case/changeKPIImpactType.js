const changeKPIImpactType = (kpi) => {
  return {
    type: 'CHANGE_KPI_IMPACT_TYPE',
    impact_type: kpi.impact_type,
    id: kpi.id
  }
}

export default changeKPIImpactType