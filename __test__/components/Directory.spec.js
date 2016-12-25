import React from "react";
import {shallow} from "enzyme";
import Directory from "../../src/components/Directory";
import mock from "../mock/mockState";

function setup() {
	const location = "/1/";

	const props = {
		memoItems: [
			mock.getMockMemoById(2, location),
			mock.getMockMemoById(3, location),
			mock.getMockMemoById(4, location),
		],

		directoryItems: [
			mock.getMockDirectoryById(5, location),
			mock.getMockDirectoryById(6, location),
		]
	};

	const wrapper = shallow(<Directory {...props}/>);

	return {
		props,
		wrapper
	}
}

describe('Directory', () => {
	it('should render memos', () => {
		const {wrapper} = setup();
		expect(wrapper.find('MemoItem').length).toBe(3);
	});

	it('should render directories', () => {
		const {wrapper} = setup();
		expect(wrapper.find('DirectoryItem').length).toBe(2);
	})
});