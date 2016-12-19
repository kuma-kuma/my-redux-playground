import {ADD_MEMO, MODIFY_MEMO, DELETE_MEMO, MODIFY_DIRECTORY, MOVE_DIRECTORY, ADD_DIRECTORY} from "../actions/actions";
import _ from "lodash";

const fileStructure = (state = {}, action) => {
	switch (action.type) {
		case ADD_MEMO:
			let obj = {...state};
			obj[action.id] = memoOrDirectory(undefined, action);
			return obj;
		case DELETE_MEMO:
			return _.pickBy(state, (o) => {
				return o.id !== action.id;
			});
		case MODIFY_MEMO:
			return _.mapValues(state, (o) => {
				return memoOrDirectory(o, action);
			});
		case MODIFY_DIRECTORY:
			const previousPath = getPath(state, action.id);
			const id = state[action.id]["id"];
			const option = {
				previousPathRegex: new RegExp('^' + previousPath),
				newPath: previousPath.substr(0, previousPath.length - id.toString().length - 1) + action.id + "/"
			};
			return _.mapValues(state, (o) => {
				return memoOrDirectory(o, action, option);
			});
		case MOVE_DIRECTORY:
			const newPath = action.path + state[action.id]['id'] + '/';
			return _.mapValues(state, (o) => {
				return memoOrDirectory(o, action, {
					previousPathRegex: new RegExp('^' + getPath(state, action.id)),
					newPath: newPath
				});
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
		default:
			return state;
	}
};

function memoOrDirectory(state = {}, action, option) {
	switch (action.type) {
		case ADD_MEMO:
			return {
				path: action.path,
				id: action.id,
				title: '',
				text: ''
			};
		case MODIFY_MEMO:
			if (action.id === state.id) {
				return {
					...state,
					title: action.title,
					text: action.text
				}
			}

			return state;
		case MODIFY_DIRECTORY:
			if (action.id === state.id) {
				return {
					...state,
					title: action.title,
					path: option.newPath
				}
			}

			return {
				...state,
				path: state.path.replace(option.previousPathRegex, option.newPath)
			};
		case MOVE_DIRECTORY:
			if (action.id === state.id) {
				return {
					...state,
					path: option.newPath
				}
			}

			return {
				...state,
				path: state.path.replace(option.previousPathRegex, option.newPath)
			};
		default:
			return state;
	}
}

function getPath(state, id) {
	return state[id]['path'];
}

export default fileStructure;