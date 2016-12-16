import {combineReducers} from "redux";
import displayedMemoId from "./displayedMemoId";
import memos from "./memos";

const memoApp = combineReducers({
	memos,
	displayedMemoId
});

export default memoApp