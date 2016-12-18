import reducer from "../../src/reducers/directory";
import * as types from "../../src/actions/actions";

describe('directory', () => {

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

	it('should handle save memo', () => {

	});

	it('should handle update memo', () => {

	});
});