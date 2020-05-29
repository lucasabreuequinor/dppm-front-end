const changeKPIImpactTypeSelected = (kpi) => {
  return {
    type: 'CHANGE_KPI_IMPACT_TYPE_SELECTED',
    selected: kpi.selected,
    id: kpi.id
  }
}

export default changeKPIImpactTypeSelected