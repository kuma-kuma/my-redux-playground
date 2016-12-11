import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {render} from "react-dom";
import {addMemo, modifyText, displayMemo} from "./actions/actions";
import memoApp from "./reducers/reducers";
import App from "./components/App";

let store = createStore(memoApp);

let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);

store.dispatch(addMemo('aiu', 0));
store.dispatch(addMemo('iue', 1));
store.dispatch(modifyText('aiueo', 0));
store.dispatch(displayMemo(0));

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
