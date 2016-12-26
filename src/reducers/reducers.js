import {combineReducers} from "redux";
import displayedMemoId from "./displayedMemoId";
import memos from "./memos";
import location from "./location";

const memoApp = combineReducers({
	memos,
	displayedMemoId,
	location
});

export default memoApp