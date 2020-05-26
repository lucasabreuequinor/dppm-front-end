const changeKPIYear2 = (kpi) => {
  return {
    type: 'CHANGE_KPI_YEAR_2',
    year2: kpi.year2,
    id: kpi.id
  }
}

export default changeKPIYear2