import reducer from "../../src/reducers/reducers";
import * as types from "../../src/actions/actions";

describe('memos reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual({
			memos: [],
			displayedMemoId: types.NON_DISPLAYED_MEMO
		})
	});

	it('should handle ADD_MEMO', () => {
		expect(
			reducer(
				undefined,
				{
					type: types.ADD_MEMO,
					id: 0,
					title: 'add memo'
				}
			)
		).toEqual({
			memos: [
				{
					text: '',
					id: 0,
					title: 'add memo'
				}
			],
			displayedMemoId: types.NON_DISPLAYED_MEMO
		})
	});

	it('should handle MODIFY_MEMO', () => {
		expect(
			reducer(
				{
					memos: [
						{
							text: 'not modified',
							id: 0,
							title: 'memo'
						}
					],
					displayedMemoId: types.NON_DISPLAYED_MEMO
				}
				,
				{
					type: types.MODIFY_TEXT,
					id: 0,
					text: 'modified'
				}
			)
		).toEqual({
			memos: [
				{
					text: 'modified',
					id: 0,
					title: 'memo'
				}
			],
			displayedMemoId: types.NON_DISPLAYED_MEMO
		})
	});

	it('should handle DISPLAY_MEMO', () => {
		expect(
			reducer(
				{
					memos: [],
					displayedMemoId: types.NON_DISPLAYED_MEMO
				}
				,
				{
					type: types.DISPLAY_MEMO,
					id: 0,
				}
			)
		).toEqual({
			memos: [],
			displayedMemoId: 0
		})
	});

});