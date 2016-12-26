import {CHANGE_LOCATION} from "../actions/actions";

const location = (state = '/', action) => {
	switch (action.type) {
		case CHANGE_LOCATION:
			return action.location;
		default:
			return state;
	}
};

export default location;