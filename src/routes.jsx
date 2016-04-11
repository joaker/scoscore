import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

//Routable Components
import App from './components/App';
//import Landing from './components/Landing';
import Main from './components/Main';
import Children from './components/pure/Children';

const routes = (
    <Route path="/" component={App} title="Home">
      <IndexRoute to="/" component={Main}/>
      <Route path="Landing" title="Seatable" components={{fullscreen:Main}}>
      </Route>
    </Route>
);


export default routes;
