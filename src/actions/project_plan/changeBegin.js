const changeBegin = (projectPlan) => {
  return {
    type: 'CHANGE_PROJECT_PLAN_BEGIN',
    begin: projectPlan.begin,
    id: projectPlan.id

  }
}

export default changeBegin