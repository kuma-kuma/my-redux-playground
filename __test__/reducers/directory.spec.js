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
		const path = '/dir1/' + id;

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
			2: {
				path: path,
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
					type: types.DELETE_MEMO_OR_DIRECTORY,
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
		expect(
			reducer(
				{
					1: mock.getMockDirectory(1, 'dir1', '/dir1/'),
					2: mock.getMockMemo(2, 'text', 'title', '/dir1/2'),
					3: mock.getMockDirectory(3, 'dir2', '/dir1/dir2/'),
					4: mock.getMockMemo(4, 'text', 'title', '/dir1/dir2/4'),
					5: mock.getMockDirectory(5, 'dir3', '/dir1/dir3/'),
					6: mock.getMockMemo(6, 'text', 'title', '/dir1/dir3/6'),
					7: mock.getMockDirectory(7, 'dir4', '/dir1/dir2/dir4/')
				},
				{
					type: types.MODIFY_DIRECTORY,
					id: 1,
					title: 'modified1'
				}
			)
		).toEqual({
			1: mock.getMockDirectory(1, 'modified1', '/modified1/'),
			2: mock.getMockMemo(2, 'text', 'title', '/modified1/2'),
			3: mock.getMockDirectory(3, 'dir2', '/modified1/dir2/'),
			4: mock.getMockMemo(4, 'text', 'title', '/modified1/dir2/4'),
			5: mock.getMockDirectory(5, 'dir3', '/modified1/dir3/'),
			6: mock.getMockMemo(6, 'text', 'title', '/modified1/dir3/6'),
			7: mock.getMockDirectory(7, 'dir4', '/modified1/dir2/dir4/')
		});

		expect(
			reducer(
				{
					1: mock.getMockDirectory(1, 'dir1', '/dir1/'),
					2: mock.getMockMemo(2, 'text', 'title', '/dir1/2'),
					3: mock.getMockDirectory(3, 'dir2', '/dir1/dir2/'),
					4: mock.getMockMemo(4, 'text', 'title', '/dir1/dir2/4'),
					5: mock.getMockDirectory(5, 'dir3', '/dir1/dir3/'),
					6: mock.getMockMemo(6, 'text', 'title', '/dir3/6'),
					7: mock.getMockDirectory(7, 'dir4', '/dir1/dir2/dir4/')
				},
				{
					type: types.MODIFY_DIRECTORY,
					id: 3,
					title: 'modified2'
				}
			)
		).toEqual({
			1: mock.getMockDirectory(1, 'dir1', '/dir1/'),
			2: mock.getMockMemo(2, 'text', 'title', '/dir1/2'),
			3: mock.getMockDirectory(3, 'modified2', '/dir1/modified2/'),
			4: mock.getMockMemo(4, 'text', 'title', '/dir1/modified2/4'),
			5: mock.getMockDirectory(5, 'dir3', '/dir1/dir3/'),
			6: mock.getMockMemo(6, 'text', 'title', '/dir3/6'),
			7: mock.getMockDirectory(7, 'dir4', '/dir1/modified2/dir4/')
		})
	});

	it('should handle update memo', () => {

	});
});