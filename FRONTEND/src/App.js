import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return <Router >
    <Switch> {/* This switch will ensure that when the exact pattern is matched where it will not proceed further and show the required page in this case it will not go to Redirect instead it will show the contents in the /places/new path */}
      <Route path="/" exact>  {/* exact is used because we want to render the path / only for users if not used then whatever we pass after / will still work which we don't want we can either write it as exact or exact={true} one and the same */}
        <Users />
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Redirect to="/" />  {/* To make sure we don't end up to an unsupported page and redirect always back to / path*/}
    </Switch>
  </Router>;
}

export default App;
