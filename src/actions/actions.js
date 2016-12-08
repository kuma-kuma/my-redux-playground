export const PARSE_MARK_DOWN_TEXT = 'PARSE_MARK_DOWN_TEXT';
export const ADD_MEMO = 'ADD_MEMO';

export function parseMarkDownText(index){
	return { type: PARSE_MARK_DOWN_TEXT, index}
}

export function addMemo(title, id){
	return { type: ADD_MEMO, title, id}
}
