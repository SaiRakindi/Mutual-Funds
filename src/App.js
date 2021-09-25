import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/sign-up" component={SignupForm} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
