import React from 'react'
import Home from './home'
import { Provider } from 'react-redux' // 

//export default class Application extends React.Component {
//  render () {
//    return (
//      <Provider store={ this.props.store }>
//        <Home />
//      </Provider>
//    )
//  }
//}

// 改成createClass的写法
const Application = React.createClass({
  render(){
    return (
      <Provider store={ this.props.store }>
        <Home />
      </Provider>
    )
  }
})

export default Application

// 貌似不能写成这种形式
// export function Application(p){
//     return (
//       <Provider store={p.store }>
//         <Home />
//       </Provider>
//     )
// }

