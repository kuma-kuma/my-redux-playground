import reducer from "../../src/reducers/displayedMemoId";
import * as types from "../../src/actions/actions";

describe('displayMemoId', () => {
	it('should handle DisplayMemo', () => {
		const expectId = 4;
		expect(
			reducer(
				{
					memo: [],
					displayedMemoId: 3
				}
				,
				{
					type: types.DISPLAY_MEMO,
					id: expectId
				}
			)
		).toEqual(expectId)

	})
});