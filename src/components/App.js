import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact component={StreamList}/>
        <Route path="/stream/new" component={StreamCreate}/>
        <Route path="/stream/edit" component={StreamEdit}/>
        <Route path="/stream/delete" component={StreamDelete}/>
        <Route path="/stream/show" component={StreamShow}/>
      </>
    </BrowserRouter>
  );
};

App.propTypes = {

};

export default App;
