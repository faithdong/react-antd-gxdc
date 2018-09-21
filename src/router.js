
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/Login/Login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import NoMatch from './pages/nomatch';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import City from './pages/city/index';
import Order from './pages/order/index';
import Common from './common';
import OrderDetail from './pages/order/detail';


export default class IRouter extends React.Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() =>
            <Admin>
              <Route path="/admin/ui/buttons" component={Buttons} />
              <Route path="/admin/ui/modals" component={Modals} />
              <Route path="/admin/ui/loadings" component={Loadings} />
              <Route path="/admin/ui/notification" component={Notice} />
              <Route path="/admin/form/login" component={FormLogin} />
              <Route path="/admin/form/reg" component={FormRegister} />
              <Route path="/admin/table/basic" component={BasicTable} />
              <Route path="/admin/table/high" component={HighTable} />
              <Route path="/admin/city" component={City} />
              <Route path="/admin/order" component={Order} />
              <Route component={NoMatch} />
            </Admin>
          } />
          <Route path="/common" render={() =>
            <Common>
              <Route path="/common/order/detail/:orderId" component={OrderDetail} />
            </Common>
          }>
          </Route>
        </App>
      </HashRouter>
    )
  }
}