import {PARSE_MARK_DOWN_TEXT, ADD_MEMO} from '../actions/actions'
import {combineReducers} from "redux";
var marked = require('marked');

function  parsedText(state = '', action){
	switch(action.type){
		case PARSE_MARK_DOWN_TEXT:
			return marked(state.memos[action.index].text)
	}
}

function memos(state = [], action){
	switch(action.type){
		case ADD_MEMO:
			return [
				...state,
				memo(undefined, action)
			]
	}

}

function memo(state = '', action){

}

const memoApp = combineReducers({
	parsedText,
	memos
});

export default memoApp