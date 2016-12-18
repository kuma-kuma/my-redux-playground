import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {render} from "react-dom";
import {addMemo, modifyMemo, displayMemo} from "./actions/actions";
import memoApp from "./reducers/reducers";
import App from "./components/App";

let store = createStore(memoApp);

let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);

store.dispatch(addMemo(0, 'aiu'));
store.dispatch(addMemo(1, 'iue'));
store.dispatch(modifyMemo(0, '# aiueo'));
store.dispatch(displayMemo(0));

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
