import {MODIFY_DIRECTORY, MOVE_DIRECTORY, ADD_DIRECTORY, DELETE_DIRECTORY} from "../actions/actions";

const directories = (state = [], action) => {
	switch (action.type) {
		case MODIFY_DIRECTORY:
			return state.map(o =>
				directory(o, action)
			);
		case MOVE_DIRECTORY:
			return state.map(o =>
				directory(o, action)
			);
		case ADD_DIRECTORY:
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					path: action.location + action.id + '/'
				}
			];
		case DELETE_DIRECTORY:
			return state.filter(o =>
				directory(o, action)
			);
		default:
			return state;
	}
};

function directory(state = {}, action, option) {
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
			const newLocation = action.newLocation + action.id + '/';
			const rgx = new RegExp('^' + action.previousPath);
			return {
				...state,
				path: state.path.replace(rgx, newLocation)
			};
			return state;
		case DELETE_DIRECTORY:
			const deletedRgx = new RegExp('^' + action.path);
			return !state.path.match(deletedRgx);
		default:
			return state;
	}
}


export default directories;