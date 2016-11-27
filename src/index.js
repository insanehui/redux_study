import React from 'react'
import { render } from 'react-dom'

// 这里得到的是一个函数
import createStore from './create-store'

// react组件
import Application from './application'

const store = createStore()

render(
    // 直接将 store作为属性赋给组件，就搞定一切？
    <Application store={store} />,
    document.getElementById('root')
)

