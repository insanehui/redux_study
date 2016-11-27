// 给 redux 提供的一个 promise 中间件
export default function promiseMiddleware() {

  // next 是什么？什么时候被传入？
  // action 应该是对应 redux 的action对象吧？
  return (next) => (action) => {
    const { promise, types, ...rest } = action

    if (!promise) {
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = types

    next({...rest, type: REQUEST})

    return promise().then(
      (result) => {
        next({...rest, result, type: SUCCESS})
      },
      (error) => {
        next({...rest, error, type: FAILURE})
      }
    )
  }
}
