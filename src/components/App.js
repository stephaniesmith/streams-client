import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <div className="ui container">
        <Header/>
        <Switch>
          <Route path="/" exact component={StreamList}/>
          <Route path="/stream/new" component={StreamCreate}/>
          <Route path="/stream/edit/:id" component={StreamEdit}/>
          <Route path="/stream/delete/:id" component={StreamDelete}/>
          <Route path="/stream/:id" component={StreamShow}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
