import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const Home = () => (
  <>
    <h1>Homepage</h1>
    <Link to='/cart'>To Cart</Link>
  </>
)
const Cartpage = () => (
  <>
    <h1>Cartpage</h1>
    <Link to='/'>To Home</Link>
  </>
)

const App = () => {
  return (
    <div>
      <h1>Hello World from React</h1>
      <h2>Testing React deployment</h2>
      <Router>
        <Switch>
          <Route path='/cart' component={Cartpage} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
