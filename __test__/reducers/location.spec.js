import reducer from "../../src/reducers/location";
import * as types from "../../src/actions/actions";

describe('location', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {type: ''})).toBe('/')
	});

	it('should handle CHANGE_LOCATION', () => {
		const location = '/1/2/';
		expect(
			reducer(
				'/',
				{
					type: types.CHANGE_LOCATION,
					location: location
				}
			)
		).toBe(location);
	})
});