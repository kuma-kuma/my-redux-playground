import {DISPLAY_MEMO, NON_DISPLAYED_MEMO} from "../actions/actions";

const displayedMemoId = (state = NON_DISPLAYED_MEMO, action) => {
	switch (action.type) {
		case DISPLAY_MEMO:
			return state = action.id;
		default:
			return state;
	}
};

export default displayedMemoId;