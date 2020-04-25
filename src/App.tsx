import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePage from "./components/createPage";
import "antd/dist/antd.css";
import FooterZiim from "./component/footer/footer";

function App() {
	return (
		<Router>
			<div>
				{/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/create_page" component={CreatePage} />
				</Switch>
			</div>
			<FooterZiim />
		</Router>
	);
}

export default App;
