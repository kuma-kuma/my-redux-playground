import {PARSE_MARK_DOWN_TEXT} from '../actions/actions'
import {combineReducers} from "redux";
var marked = require('marked');

function  markDownText(state = '', action){
	switch(action.type){
		case PARSE_MARK_DOWN_TEXT:
			return marked(state)
	}
}

const memoApp = combineReducers({
	markDownText
});

export default memoApp