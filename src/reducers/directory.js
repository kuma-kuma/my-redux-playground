import {ADD_MEMO, MODIFY_MEMO, DELETE_MEMO_OR_DIRECTORY} from "../actions/actions";
import _ from "lodash";

const fileStructure = (state = {}, action) => {
	switch (action.type) {
		case ADD_MEMO:
			let obj = {...state};
			obj[action.id] = memo(undefined, action);
			return obj;
		case DELETE_MEMO_OR_DIRECTORY:
			return _.pickBy(state, (o) => {
				return o.id !== action.id;
			});
		case MODIFY_MEMO:

		default:
			return state;
	}
};

function memo(state = {}, action) {
	switch (action.type) {
		case ADD_MEMO:
			return {
				path: action.path,
				id: action.id,
				title: '',
				text: ''
			};
		default:
			return state;
	}
}

export default fileStructure;