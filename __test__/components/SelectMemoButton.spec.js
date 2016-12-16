import React from "react";
import {shallow} from "enzyme";
import SelectMemoButton from "../../src/components/SelectMemoButton";

function setup() {
	const props = {
		title: 'title',
		onSelectButtonClick: jest.fn()
	};

	const wrapper = shallow(<SelectMemoButton {...props}/>);

	return {
		props,
		wrapper
	}
}


describe('SelectMemoButton', () => {
	it('should render text in button', () => {
		const {wrapper} = setup();
		expect(wrapper.find('button').text()).toBe('title');
	});

	it('should handle click event', () => {
		const {wrapper, props} = setup();
		wrapper.find('button').simulate('click');
		expect(props.onSelectButtonClick.mock.calls.length).toBe(1);
	})
});