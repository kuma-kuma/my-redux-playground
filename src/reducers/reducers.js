import {combineReducers} from "redux";
import displayedMemoId from "./displayedMemoId";
import memos from "./memos";
import directories from "./directory";
import location from "./location";

const memoApp = combineReducers({
	memos,
	directories,
	displayedMemoId,
	location
});

export default memoApp