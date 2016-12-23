import {ADD_MEMO, MODIFY_MEMO, DELETE_MEMO, MOVE_MEMO, MOVE_DIRECTORY} from "../actions/actions";
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
			return _.filter(state, o =>
				action.id !== o.id
			);
		case MOVE_MEMO:
			return state.map(o =>
				memo(o, action)
			);
		case MOVE_DIRECTORY:
			return state.map(o =>
				memo(o, action)
			);
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
		case MOVE_MEMO:
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				path: action.location + state.id
			};
		case MOVE_DIRECTORY:
			const newLocation = action.newLocation + action.id + '/';
			const rgx = new RegExp('^' + action.previousPath);
			return {
				...state,
				path: state.path.replace(rgx, newLocation)
			};
		default:
			return state;
	}
}

export default memos;