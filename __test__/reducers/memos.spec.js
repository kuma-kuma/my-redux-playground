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
		const targetMemo = mock.getMockMemo(0, 'text', 'text0', '/0');
		expect(
			reducer(
				[
					targetMemo
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
				{...targetMemo, text: 'modified'}
			]
		)
	});

	it('should handle DELETE_MEMO', () => {
		const notDeletedMemo = mock.getMockMemo(0, 'test0', 'title0', '/0');
		expect(
			reducer(
				[
					notDeletedMemo,
					mock.getMockMemo(1, 'test1', 'title1', '/2/1')
				]
				,
				{
					type: types.DELETE_MEMO,
					id: 1
				}
			)
		).toEqual(
			[
				notDeletedMemo
			]
		)
	});

	it('should handle MOVE_MEMO', () => {
		const targetMemo = mock.getMockMemo(2, 'text2', 'title2', '/1/2');
		expect(
			reducer(
				[
					targetMemo,
				],
				{
					type: types.MOVE_MEMO,
					id: 2,
					location: '/3/4/'
				}
			)
		).toEqual(
			[
				{...targetMemo, path: '/3/4/2'}
			]
		)
	});

});