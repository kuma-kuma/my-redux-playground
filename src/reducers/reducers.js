import {PARSE_MARK_DOWN_TEXT, ADD_MEMO, MODIFY_TEXT, DISPLAY_MEMO, NON_DISPLAYED_MEMO} from "../actions/actions";
import {combineReducers} from "redux";
const marked = require('marked');

function parsedText(state = '', action) {
	switch (action.type) {
		case PARSE_MARK_DOWN_TEXT:
			return marked(state.memos[action.index].text);
		default:
			return state;
	}
}

function memos(state = [], action) {
	switch (action.type) {
		case ADD_MEMO:
			return [
				...state,
				memo(state, action)
			];
		case MODIFY_TEXT:
			return state.map(m =>
				memo(m, action)
			);
		default:
			return state
	}

}

function memo(state = {}, action) {
	switch (action.type) {
		case ADD_MEMO:
			return {
				text: '',
				id: action.id,
				title: action.title
			};
		case  MODIFY_TEXT:
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				text: action.text,
			};
		default:
			return state;
	}
}

function displayedMemoId(state = NON_DISPLAYED_MEMO, action) {
	switch (action.type) {
		case DISPLAY_MEMO:
			return state = action.id;
		default:
			return state;
	}
}

const memoApp = combineReducers({
	parsedText,
	memos,
	displayedMemoId
});

export default memoApp