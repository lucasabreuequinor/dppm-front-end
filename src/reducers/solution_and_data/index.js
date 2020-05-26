import sadMakeOrBuy from './sadMakeOrBuy'
import sadSolutionOverview from './sadSolutionOverview'
import sadArchtechtureDiagram from './sadArchtechtureDiagram'
import sadArchtechtureDetail from './sadArchtechtureDetail'
import sadArchContractStatus from './sadArchContractStatus'
import sadArchContractFollowUp from './sadArchContractFollowUp'
import sadArchContractReviewedBy from './sadArchContractReviewedBy'
import sadTechSetupStatus from './sadTechSetupStatus'
import sadTechSetupFollowUp from './sadTechSetupFollowUp'
import sadTechSetupReviewedBy from './sadTechSetupReviewedBy'
import sadOperationalRunbookStatus from './sadOperationalRunbookStatus'
import sadOperationalRunbookFollowUp from './sadOperationalRunbookFollowUp'
import sadOperationalRunbookReviewedBy from './sadOperationalRunbookReviewedBy'


import {combineReducers} from 'redux' 
 
const sadReducers = combineReducers({
  sadMakeOrBuy,
  sadSolutionOverview,
  sadArchtechtureDiagram,
  sadArchtechtureDetail,
  sadArchContractStatus,
  sadArchContractFollowUp,
  sadArchContractReviewedBy,
  sadTechSetupStatus,
  sadTechSetupFollowUp,
  sadTechSetupReviewedBy,
  sadOperationalRunbookStatus,
  sadOperationalRunbookFollowUp,
  sadOperationalRunbookReviewedBy
})


export default sadReducers