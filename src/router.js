
 import React from 'react';
 import { HashRouter , Route , Switch } from 'react-router-dom';
 import App from './App';
 import Login from './pages/Login/Login';
 import Admin from './admin';
 import Buttons from './pages/ui/buttons';
 import Modals from './pages/ui/modals';
 import Loadings from './pages/ui/loadings';
 import Notice from './pages/ui/notice';
 import NoMatch from './pages/nomatch';

 export default class IRouter extends React.Component{

  render(){
    return(
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={ () => 
            <Admin>
              <Route path="/admin/ui/buttons" component={Buttons}/>
              <Route path="/admin/ui/modals" component={Modals}/>
              <Route path="/admin/ui/loadings" component={Loadings}/>
              <Route path="/admin/ui/notification" component={Notice}/>
              <Route component={NoMatch}/>
            </Admin>
          } />
          <Route path="/order/detail" component={Admin} />
        </App>
      </HashRouter>
    )
  }
 }