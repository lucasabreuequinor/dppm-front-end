const changeKPIYear5 = (kpi) => {
  return {
    type: 'CHANGE_KPI_YEAR_5',
    year5: kpi.year5,
    id: kpi.id
  }
}

export default changeKPIYear5