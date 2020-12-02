import React from 'react'
import { hot } from 'react-hot-loader'
// import Warning from './Warning'
const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0,
  }

  // UNSAFE_componentWillMount() {
  //   console.log('This lifecycle hook should be avoided')
  // }

  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }))
  }

  decrement = () => {
    this.setState((state) => ({ count: state.count - 1 }))
  }

  render() {
    // throw new Error('Boom!')
    const { count } = this.state
    return (
      <main>
        <div>
          <h1>Hello world</h1>
          <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          {count > 10 ? (
            <React.Suspense fallback={null}>
              <Warning />
            </React.Suspense>
          ) : null}
        </div>
      </main>
    )
  }
}

export default hot(module)(App)
