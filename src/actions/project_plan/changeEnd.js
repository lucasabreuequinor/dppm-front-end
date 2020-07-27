const changeEnd = (projectPlan) => {
  return {
    type: 'CHANGE_PROJECT_PLAN_END',
    end: projectPlan.end,
    id: projectPlan.id

  }
}

export default changeEnd