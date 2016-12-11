export const PARSE_MARK_DOWN_TEXT = 'PARSE_MARK_DOWN_TEXT';
export const ADD_MEMO = 'ADD_MEMO';
export const MODIFY_TEXT = 'MODIFY_TEXT';

export const parseMarkDownText = (index) => {
	return { type: PARSE_MARK_DOWN_TEXT, index}
}

export const addMemo = (title, id) => {
	return { type: ADD_MEMO, title, id}
}

export const modifyText = (text, id) => {
	return {type: MODIFY_TEXT, text, id}
}