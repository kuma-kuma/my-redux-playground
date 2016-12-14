import {Route} from "react-router";
import App from "components/App";

const AppRoutes = (
	<Route path="/" handler={App}>
		<Route path="edit/:memoId" handler={Editor}/>
	</Route>
);

export default AppRoutes;