export const PARSE_MARK_DOWN_TEXT = 'PARSE_MARK_DOWN_TEXT';

export const ADD_MEMO = 'ADD_MEMO';
export const MODIFY_MEMO = 'MODIFY_MEMO';
export const MOVE_MEMO = 'MOVE_MEMO';
export const DISPLAY_MEMO = 'DISPLAY_MEMO';
export const DELETE_MEMO = 'DELETE_MEMO';

export const ADD_DIRECTORY = 'ADD_DIRECTORY';
export const MODIFY_DIRECTORY = 'MODIFY_DIRECTORY';
export const MOVE_DIRECTORY = 'MOVE_DIRECTORY';
export const DELETE_DIRECTORY = 'DELETE_DIRECTORY';


export const NON_DISPLAYED_MEMO = -1;

export const parseMarkDownText = (index) => {
	return { type: PARSE_MARK_DOWN_TEXT, index}
};

export const addMemo = (id, title, location) => {
	return {type: ADD_MEMO, id, title, location}
};

export const modifyMemo = (id, text, title) => {
	return {type: MODIFY_MEMO, id, text, title}
};

export const displayMemo = (id) => {
	return {type: DISPLAY_MEMO, id}
};

export const moveMemo = (id, location) => {
	return {type: MOVE_MEMO, id, location}
};

export const deleteMemo = (id) => {
	return {type: DELETE_MEMO, id}
};

export const addDirectory = (id, location, title) => {
	return {type: ADD_DIRECTORY, id, location, title}
};

export const modifyDirectory = (id, title) => {
	return {type: MODIFY_DIRECTORY, id, title}
};

export const moveDirectory = (id, previousPath, newLocation) => {
	return {type: MOVE_DIRECTORY, id, previousPath, newLocation}
};

export const deleteDirectory = (id, path) => {
	return {type: DELETE_DIRECTORY, id, path}
};