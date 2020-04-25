import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home';
import CreatePage from './components/createPage';
import FooterZiim from "./component/footer";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/create_page">
          <CreatePage />
        </Route>
      </Switch>
      <FooterZiim/>
    </div>
  </Router>
  );
}

export default App;