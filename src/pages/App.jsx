import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingComponent from '../components/LoadingComponent'

const SelectTag = Loadable({
  loader: () => import('./SelectTag/SelectTag'),
  loading: LoadingComponent
  }
);

const DiscountCoupon = Loadable({
  loader: () => import('./DiscountCoupon/DiscountCoupon'),
  loading: LoadingComponent
  }
);

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/select-tag" component={SelectTag}></Route>
          <Route path="/discount-coupon" component={DiscountCoupon}></Route>
        </Switch>
      </Router>
    )
  }
};

export default App;