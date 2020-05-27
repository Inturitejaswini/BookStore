import React,{Component} from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard'
import BookCard from './components/bookCard'
import  AddToCard from './components/addToCart';
import Pagination from './components/pagination'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Dashboard}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/bookCard' component={BookCard}></Route>
          <Route path='/pagination' component={Pagination}></Route>
          <Route path='/addToCart' component={AddToCard}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App