import reducer from "../../src/reducers/location";
describe('location', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {type: ''})).toBe('/')
	});

	it('should handle CHANGE_LOCATION', () => {
	})
});