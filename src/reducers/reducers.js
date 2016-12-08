import {PARSE_MARK_DOWN_TEXT, ADD_MEMO} from '../actions/actions'
import {combineReducers} from "redux";
var marked = require('marked');

function  markDownText(state = '', action){
	switch(action.type){
		case PARSE_MARK_DOWN_TEXT:
			return marked(state)
	}
}

function memos(state = [], action){
	switch(action.type){
		case ADD_MEMO:
			return
	}

}

const memoApp = combineReducers({
	markDownText
});

export default memoApp