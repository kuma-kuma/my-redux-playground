import React from "react";
import {Router, Route, browserHistory} from "react-router";
import App from "./App";
import Directories from "../containers/DirectoriesContainer";

const AppRoutes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="directories" component={Directories}/>
		</Route>
	</Router>
);

export default AppRoutes;