const changeKPIYear3 = (kpi) => {
  return {
    type: 'CHANGE_KPI_YEAR_3',
    year3: kpi.year3,
    id: kpi.id
  }
}

export default changeKPIYear3