import {ADD_MEMO} from "../actions/actions";

const fileStructure = (state = {}, action) => {
	switch (action.type) {
		case ADD_MEMO:
			let obj = {...state};
			obj[action.id] = memo(undefined, action);
			return obj;
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