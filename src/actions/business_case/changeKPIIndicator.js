const changeKPIIndicator = (kpi) => {
  return {
    type: 'CHANGE_KPI_INDICATOR',
    indicator: kpi.indicator,
    id: kpi.id
  }
}

export default changeKPIIndicator