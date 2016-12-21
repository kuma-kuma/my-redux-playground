import {ADD_MEMO, MODIFY_MEMO, DELETE_MEMO} from "../actions/actions";
import _ from "lodash";

const memos = (state = [], action) => {
	switch (action.type) {
		case ADD_MEMO:
			return [
				...state,
				memo(state, action)
			];
		case MODIFY_MEMO:
			return state.map(m =>
				memo(m, action)
			);
		case DELETE_MEMO:
			return _.filter(state, (o) => {
				return action.id !== o.id;
			});
		default:
			return state
	}
};

function memo(state = {}, action) {
	switch (action.type) {
		case ADD_MEMO:
			return {
				text: '',
				id: action.id,
				title: action.title,
				path: action.location + action.id
			};
		case  MODIFY_MEMO:
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

export default memos;