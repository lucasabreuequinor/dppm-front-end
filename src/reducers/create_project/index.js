import cpName from './cpName'
import cpLeader from './cpLeader'
import cpDigitalProgramme from './cpDigitalProgramme'
import cpApprover from './cpApprover'
import cpLinkToSip from './cpLinkToSip'
import cpDG from './cpDG'

import {combineReducers} from 'redux' 

const cpReducers = combineReducers({
  cpName,
  cpLeader,
  cpDigitalProgramme,
  cpApprover,
  cpLinkToSip,
  cpDG
})


export default cpReducers