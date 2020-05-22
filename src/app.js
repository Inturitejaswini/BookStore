import React,{Component} from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard'
import BookCard1 from './components/bookCard'
import  Pagination1 from './components/pagination';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Dashboard}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/bookCard' component={BookCard1}></Route>
          <Route path='/pagination' component={Pagination1}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App