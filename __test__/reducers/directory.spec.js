import reducer from "../../src/reducers/directory";
import * as types from "../../src/actions/actions";
import mock from "../mock/mockState";

describe('directory', () => {

	const notAffectedState = mock.getMockMemo(10, 'test', 'testTitle', '10');

	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({});
	});

	it('should handle add memo', () => {
		const id = 2;
		const path = '/1/';

		expect(
			reducer(
				{},
				{
					type: types.ADD_MEMO,
					path: path,
					id: id
				}
			)
		).toEqual({
			[id]: {
				path: path + id + '/',
				id: id,
				text: '',
				title: '',
			}
		});
	});

	it('should handle delete memo', () => {
		expect(
			reducer(
				{
					4: {
						path: '4',
						id: 4,
						text: 'test',
						title: 'title4'
					},
					5: {
						path: '5',
						id: 5,
						text: 'test',
						title: 'title5'
					}
				},
				{
					type: types.DELETE_MEMO,
					id: 4
				}
			)
		).toEqual({
			5: {
				path: '5',
				id: 5,
				text: 'test',
				title: 'title5'
			}
		})
	});

	it('should handle modify memo', () => {
		expect(
			reducer(
				{
					4: mock.getMockMemo(4, 'text', 'title', '4'),
					10: notAffectedState
				},
				{
					type: types.MODIFY_MEMO,
					id: 4,
					text: 'text is modified',
					title: 'title is modified'
				}
			)
		).toEqual({
			4: mock.getMockMemo(4, 'text is modified', 'title is modified', '4'),
			10: notAffectedState
		})
	});

	it('should handle modify directory', () => {
		const initialState = {
			1: mock.getMockDirectory(1, 'dir1', '/1/'),
			2: mock.getMockMemo(2, 'text', 'title', '/1/2'),
			3: mock.getMockDirectory(3, 'dir2', '/1/3/'),
			4: mock.getMockMemo(4, 'text', 'title', '/1/3/4'),
			5: mock.getMockDirectory(5, 'dir3', '/1/5/'),
			6: mock.getMockMemo(6, 'text', 'title', '/1/5/6'),
			7: mock.getMockDirectory(7, 'dir4', '/1/3/7/')
		};
		expect(
			reducer(initialState,
				{
					type: types.MODIFY_DIRECTORY,
					id: 1,
					title: 'modified1'
				}
			)
		).toEqual({
			...initialState,
			1: mock.getMockDirectory(1, 'modified1', '/1/'),
		});

		expect(
			reducer(initialState,
				{
					type: types.MODIFY_DIRECTORY,
					id: 3,
					title: 'modified2'
				}
			)
		).toEqual({
			...initialState,
			3: mock.getMockDirectory(3, 'modified2', '/1/3/'),
		})
	});

	it('should handle move directory', () => {
		const initialState = {
			1: mock.getMockDirectory(1, 'dir1', '/1/'),
			2: mock.getMockDirectory(2, 'dir2', '/1/2/'),
			3: mock.getMockMemo(3, 'memo', 'memo3', '/1/2/4/3'),
			4: mock.getMockDirectory(4, 'dir3', '/1/2/4/')
		};
		expect(
			reducer(initialState,
				{
					type: types.MOVE_DIRECTORY,
					id: 4,
					path: '/'
				}
			)
		).toEqual({
			...initialState,
			3: mock.getMockMemo(3, 'memo', 'memo3', '/4/3'),
			4: mock.getMockDirectory(4, 'dir3', '/4/')
		});
		expect(
			reducer(initialState,
				{
					type: types.MOVE_DIRECTORY,
					id: 4,
					path: '/1/'
				}
			)
		).toEqual({
			...initialState,
			3: mock.getMockMemo(3, 'memo', 'memo3', '/1/4/3'),
			4: mock.getMockDirectory(4, 'dir3', '/1/4/')
		})
	});

	it('should handle add directory', () => {
		expect(
			reducer(
				undefined,
				{
					type: types.ADD_DIRECTORY,
					id: 1,
					location: '/2/',
					title: 'test'
				}
			)
		).toEqual({
			1: mock.getMockDirectory(1, 'test', '/2/1/')
		})
	})
});