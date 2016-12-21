import {MODIFY_DIRECTORY, MOVE_DIRECTORY, ADD_DIRECTORY, DELETE_DIRECTORY} from "../actions/actions";
import _ from "lodash";

const directories = (state = [], action) => {
	switch (action.type) {
		case MODIFY_DIRECTORY:
			return _.mapValues(state, (o) => {
				return memoOrDirectory(o, action);
			});
		case MOVE_DIRECTORY:
			return _.mapValues(state, (o) => {
				return memoOrDirectory(o, action);
			});
		case ADD_DIRECTORY:
			return {
				...state,
				[action.id]: {
					id: action.id,
					title: action.title,
					path: action.location + action.id + '/'
				}
			};
		case DELETE_DIRECTORY:
			return _.pickBy(state, o =>
				action.id !== o.id
			);
		default:
			return state;
	}
};

function memoOrDirectory(state = {}, action, option) {
	switch (action.type) {
		case MODIFY_DIRECTORY:
			if (action.id === state.id) {
				return {
					...state,
					title: action.title,
				}
			}

			return state;
		case MOVE_DIRECTORY:
			if (action.id === state.id) {
				return {
					...state,
					path: action.newLocation + state.id.toString() + '/'
				}
			}

			return state;
		default:
			return state;
	}
}

function getPath(state, id) {
	return state[id]['path'];
}

export default directories;