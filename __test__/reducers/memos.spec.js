import reducer from "../../src/reducers/memos";
import * as types from "../../src/actions/actions";
import mock from "../mock/mockState";

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
					title: 'add memo',
					location: '/2/'
				}
			)
		).toEqual(
			[
				mock.getMockMemo(0, '', 'add memo', '/2/0')
			]
		)
	});

	it('should handle MODIFY_MEMO', () => {
		expect(
			reducer(
				[
					mock.getMockMemo(0, 'text', 'text0', '/0')
				]
				,
				{
					type: types.MODIFY_MEMO,
					id: 0,
					text: 'modified'
				}
			)
		).toEqual(
			[
				mock.getMockMemo(0, 'modified', 'text0', '/0')
			]
		)
	});
});