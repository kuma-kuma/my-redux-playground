export const PARSE_MARK_DOWN_TEXT = 'PARSE_MARK_DOWN_TEXT';
export const ADD_MEMO = 'ADD_MEMO';
export const MODIFY_MEMO = 'MODIFY_MEMO';
export const MODIFY_DIRECTORY = 'MODIFY_DIRECTORY';
export const DISPLAY_MEMO = 'DISPLAY_MEMO';
export const DELETE_MEMO_OR_DIRECTORY = 'DELETE_MEMO_OR_DIRECTORY';

export const NON_DISPLAYED_MEMO = -1;

export const parseMarkDownText = (index) => {
	return { type: PARSE_MARK_DOWN_TEXT, index}
};

export const addMemo = (id, title, path) => {
	return {type: ADD_MEMO, id, title, path}
};

export const modifyMemo = (id, text, title) => {
	return {type: MODIFY_MEMO, id, text, title}
};

export const displayMemo = (id) => {
	return {type: DISPLAY_MEMO, id}
};

export const deleteMemoOrDirectory = (id) => {
	return {type: DELETE_MEMO_OR_DIRECTORY, id}
};

export const modifyDirectory = (id, title) => {
	return {type: MODIFY_DIRECTORY, id, title}
}