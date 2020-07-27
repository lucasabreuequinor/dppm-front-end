const changeProjectPlanType = (projectPlan) => {
  return {
    type: 'CHANGE_PROJECT_PLAN_PROJECT_PLAN_TYPE',
    project_plan_type: projectPlan.project_plan_type,
    id: projectPlan.id

  }
}

export default changeProjectPlanType