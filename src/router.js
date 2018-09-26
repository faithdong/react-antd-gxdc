
import React from 'react';
import { HashRouter, Route, Switch , Redirect} from 'react-router-dom';
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
import Permission from './pages/permission';
import Home from './pages/home';


export default class IRouter extends React.Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/common" render={() =>
              <Common>
                <Route path="/common/order/detail/:orderId" exact={true} component={OrderDetail} />
              </Common>
            }>
            </Route>
            <Route path="/" render={() =>
              <Admin>
                <Route path="/home" component={Home} />
                <Route path="/ui/buttons" component={Buttons} />
                <Route path="/ui/modals" component={Modals} />
                <Route path="/ui/loadings" component={Loadings} />
                <Route path="/ui/notification" component={Notice} />
                <Route path="/form/login" component={FormLogin} />
                <Route path="/form/reg" component={FormRegister} />
                <Route path="/table/basic" component={BasicTable} />
                <Route path="/table/high" component={HighTable} />
                <Route path="/city" component={City} />
                <Route path="/order" component={Order} />
                <Route path="/permission" component={Permission} />
                <Redirect to="/home" />
                <Route component={NoMatch} />
              </Admin>
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}