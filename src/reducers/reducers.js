import {PARSE_MARK_DOWN_TEXT} from '../actions/actions'
var marked = require('marked');

function  markDownText(state = '', action){
	switch(action.type){
		case PARSE_MARK_DOWN_TEXT:
			return marked(state)
	}
}
