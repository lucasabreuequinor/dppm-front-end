import cpCanvas from './cpCanvas'
import chCanvas from './chCanvas'
import sadCanvas from './sadCanvas'
import bcCanvas from './bcCanvas'
import bcItemsCanvas from './bcItemsCanvas'
import bcrpCanvas from './bcrpCanvas'
import ppCanvas from './ppCanvas'
import rpCanvas from './rpCanvas'
import rrCanvas from './rrCanvas'
import lpcmCanvas from './lpcmCanvas'


import {combineReducers} from 'redux' 

const canvasReducers = combineReducers({
  cpCanvas,
  chCanvas,
  sadCanvas,
  bcCanvas,
  bcItemsCanvas,
  bcrpCanvas,
  ppCanvas,
  rpCanvas,
  rrCanvas,
  lpcmCanvas


})


export default canvasReducers