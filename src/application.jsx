import React from 'react'
import Home from './home'
import { Provider } from 'react-redux' // 

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <Home />
      </Provider>
    )
  }
}

// 转到 ./home.jsx，从这个React组件中，去发现更多关于 state 和派发 action 的细节。
