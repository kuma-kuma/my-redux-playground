import reducer from "../../src/reducers/memos";
import * as types from "../../src/actions/actions";

describe('memos reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, [])
		).toEqual([])
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
		).toEqual(
			[
				{
					text: '',
					id: 0,
					title: 'add memo'
				}
			]
		)
	});

	it('should handle MODIFY_MEMO', () => {
		expect(
			reducer(
				[
					{
						text: 'not modified',
						id: 0,
						title: 'memo'
					}
				]
				,
				{
					type: types.MODIFY_TEXT,
					id: 0,
					text: 'modified'
				}
			)
		).toEqual(
			[
				{
					text: 'modified',
					id: 0,
					title: 'memo'
				}
			]
		)
	});
});