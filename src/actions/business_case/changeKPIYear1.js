const changeKPIYear1 = (kpi) => {
  return {
    type: 'CHANGE_KPI_YEAR_1',
    year1: kpi.year1,
    id: kpi.id
  }
}

export default changeKPIYear1