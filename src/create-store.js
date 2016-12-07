
import { createStore, applyMiddleware, combineReducers } from 'redux'

import promiseMiddleware from './promise-middleware'

import * as reducers from './reducers'

// 以下写法是错的：
// import reducers from './reducers'
// 因为 ./reducers 导出形式是 export function _time(...){...}
// 上面正确的写法，使得 reducers 为
// {
//  _time : function(...){...}
// }
// 这样可以直接用于 reducer的combine
//
// 而错误的写法，使得到的reducers是一个函数，则不能用于combine


export default function(data) {
  var reducer = combineReducers(reducers)

  // 使用中间件
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)

  var store = finalCreateStore(reducer, data)

  return store
}
