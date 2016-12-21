import reducer from "../../src/reducers/directory";
import * as types from "../../src/actions/actions";
import mock from "../mock/mockState";
import _ from "lodash";
describe('directory', () => {

	const notAffectedState = mock.getMockMemo(10, 'test', 'testTitle', '10');

	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual([]);
	});


	it('should handle modify directory', () => {
		const initialState = [
			mock.getMockDirectory(1, 'dir1', '/1/'),
			mock.getMockDirectory(3, 'dir2', '/1/3/'),
			mock.getMockDirectory(5, 'dir3', '/1/5/'),
			mock.getMockDirectory(7, 'dir4', '/1/3/7/')
		];
		expect(
			reducer(initialState,
				{
					type: types.MODIFY_DIRECTORY,
					id: 1,
					title: 'modified1'
				}
			)
		).toEqual([
			mock.getMockDirectory(1, 'modified1', '/1/'),
			..._.tail(initialState),
		]);

		expect(
			reducer(initialState,
				{
					type: types.MODIFY_DIRECTORY,
					id: 3,
					title: 'modified2'
				}
			)
		).toEqual([
			initialState[0],
			mock.getMockDirectory(3, 'modified2', '/1/3/'),
			..._.takeRight(initialState, 2)
		])
	});

	it('should handle move directory', () => {
		const initialState = [
			mock.getMockDirectory(1, 'dir1', '/1/'),
			mock.getMockDirectory(2, 'dir2', '/1/2/'),
			mock.getMockDirectory(4, 'dir3', '/1/2/4/')
		];
		expect(
			reducer(initialState,
				{
					type: types.MOVE_DIRECTORY,
					id: 4,
					previousPath: '/1/2/4/',
					newLocation: '/'
				}
			)
		).toEqual([
			...initialState,
			mock.getMockDirectory(4, 'dir3', '/4/')
		]);

		expect(
			reducer(initialState,
				{
					type: types.MOVE_DIRECTORY,
					id: 4,
					previousPath: '/1/2/4/',
					newLocation: '/1/'
				}
			)
		).toEqual([
			...initialState,
			mock.getMockDirectory(4, 'dir3', '/1/4/')
		])
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
		).toEqual([
			mock.getMockDirectory(1, 'test', '/2/1/')
		])
	});


	it('should handle delete directory', () => {
		const targetDir = mock.getMockDirectory(3, 'dir2', '/1/3/');

		const notTargetDirs = [
			mock.getMockDirectory(1, 'dir1', '/1/'),
			mock.getMockDirectory(5, 'dir3', '/1/5/'),
			mock.getMockDirectory(7, 'dir4', '/1/3/7/')
		];

		expect(
			reducer(
				[...notTargetDirs, targetDir],
				{
					type: types.DELETE_DIRECTORY,
					id: 3,
					path: targetDir.path,
				}
			)
		).toEqual(notTargetDirs);
	});
});