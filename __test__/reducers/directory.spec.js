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

	});

	it('should handle save memo', () => {

	});

	it('should handle update memo', () => {

	});
});