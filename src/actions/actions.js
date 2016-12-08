export const PARSE_MARK_DOWN_TEXT = 'PARSE_MARK_DOWN_TEXT';
export const ADD_MEMO = 'ADD_MEMO';

export function parseMarkDownText(id){
	return { type: PARSE_MARK_DOWN_TEXT, id}
}

export function addMemo(title){
	return { type: ADD_MEMO, title}
}
