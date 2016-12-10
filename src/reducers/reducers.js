import {PARSE_MARK_DOWN_TEXT, ADD_MEMO} from '../actions/actions'
import {combineReducers} from "redux";
var marked = require('marked');

function  parsedText(state = '', action){
	switch(action.type){
		case PARSE_MARK_DOWN_TEXT:
			return marked(state.memos[action.index].text)
		default:
			return state;
	}
}

function memos(state = [], action){
	switch(action.type){
		case ADD_MEMO:
			return [
				...state,
				{
					text: '',
					id: action.id,
					title: action.title
				}
			]
		default:
			return state
	}

}

const memoApp = combineReducers({
	parsedText,
	memos
});

export default memoApp