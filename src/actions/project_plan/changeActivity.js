const changeActivity = (projectPlan) => {
  return {
    type: 'CHANGE_PROJECT_PLAN_ACTIVITY',
    activity: projectPlan.activity,
    id: projectPlan.id

  }
}

export default changeActivity