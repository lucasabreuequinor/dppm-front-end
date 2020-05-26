const changeKPIYear4 = (kpi) => {
  return {
    type: 'CHANGE_KPI_YEAR_4',
    year4: kpi.year4,
    id: kpi.id
  }
}

export default changeKPIYear4