import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Cart from "./components/Cart";
// import store from "./store";
// import { Provider } from "react-redux";
import Dashboard from './components/dashboard/dashboard'
import BookCard from './components/bookCard'
import AddToCard from './components/addToCart';
import Pagination from './components/pagination'
import BookDetails from './components/orederSuccessful/bookDetails';
import AppBar1 from './components/appBar'
import cartDetails from './components/customerDetails/cartDetails';
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
          <Route path='/bookDetails' component={BookDetails}></Route>
          <Route path='/appBar' component={AppBar1}></Route>
          <Route path='/cartDetails' component={cartDetails}></Route>
          {/* <Provider store={store}>
            <div className="grid-container">
              <header>
                <a href="/">Bookstore</a>
              </header>
               <main>
                <div className="content">
                  <Cart />
                </div>
              </main>
              <footer>All right is reserved.</footer>
            </div>
          </Provider> */}
        </Switch>
      </Router>
    )
  }
}
export default App