export const PARSE_MARK_DOWN_TEXT = 'PARSE_MARK_DOWN_TEXT';
export const ADD_MEMO = 'ADD_MEMO';
export const MODIFY_TEXT = 'MODIFY_TEXT';
export const DISPLAY_MEMO = 'DISPLAY_MEMO';

export const NON_DISPLAYED_MEMO = -1;

export const parseMarkDownText = (index) => {
	return { type: PARSE_MARK_DOWN_TEXT, index}
};

export const addMemo = (title, id) => {
	return { type: ADD_MEMO, title, id}
};

export const modifyText = (text, id) => {
	return {type: MODIFY_TEXT, text, id}
};

export const displayMemo = (id) => {
	return {type: DISPLAY_MEMO, id}
};