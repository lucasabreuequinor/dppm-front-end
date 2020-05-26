const changeKPIBaseline = (kpi) => {
  return {
    type: 'CHANGE_KPI_BASELINE',
    baseline: kpi.baseline,
    id: kpi.id
  }
}

export default changeKPIBaseline