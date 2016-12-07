export const PARSE_MARK_DOWN_TEXT = 'PARSE_MARK_DOWN_TEXT'

export function parseMarkDownText(text){
	return { type: PARSE_MARK_DOWN_TEXT, text}
}
