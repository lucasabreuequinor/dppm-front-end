const changeKPIIndicatorSelected = (kpi) => {
  return {
    type: 'CHANGE_KPI_INDICATOR_SELECTED',
    selected: kpi.selected,
    id: kpi.id
  }
}

export default changeKPIIndicatorSelected