const addKPI = (kpi) => {
  return {
    type: 'ADD_KPI',
    id: kpi.id,
    impact_type: kpi.impact_type,
    indicator: kpi.indicator,
    baseline: kpi.baseline,
    year1: kpi.year1,
    year2: kpi.year2,
    year3: kpi.year3,
    year4: kpi.year4,
    year5: kpi.year5,
  }
}

export default addKPI
