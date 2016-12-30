import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {render} from "react-dom";
import {addMemo, modifyMemo, displayMemo, changeLocation, addDirectory} from "./actions/actions";
import memoApp from "./reducers/reducers";
import App from "./components/App";

let store = createStore(memoApp);

let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);

store.dispatch(addMemo(0, 'aiu', '/'));
store.dispatch(addMemo(1, 'iue', '/'));
store.dispatch(addDirectory(2, '/', 'dir1'));
store.dispatch(addDirectory(3, '/2/', 'dir2'));
store.dispatch(modifyMemo(0, '# aiueo'));
store.dispatch(displayMemo(0));
store.dispatch(changeLocation('/2/'));

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
