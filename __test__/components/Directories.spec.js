import React from "react";
import {shallow} from "enzyme";
import Directories from "../../src/components/Directories";

function setup() {
	const props = {
		containsOfDirectory: [
			createFakeItems(),
			createFakeItems(),
			createFakeItems()
		]
	};

	const wrapper = shallow(<Directories {...props}/>)

	return {
		props,
		wrapper
	}
}

function createFakeItems() {
	return {
		memoItems: [],
		directoryItems: []
	}
}

describe('Directories', () => {
	it('should render Directories', () => {
		const {wrapper} = setup();
		expect(wrapper.find('Directory').length).toBe(3);
	});
});