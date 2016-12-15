import React from "react";
import {shallow} from "enzyme";
import Memo from "../../src/components/Memo";

function setup() {

	const props = {
		text: 'testText',
		title: 'testTitle',
		displayMemoId: 0,
		onMemoChange: jest.fn()
	};

	const wrapper = shallow(<Memo {...props}/>);

	return {
		props,
		wrapper
	}
}

describe('Memo', () => {
	it('should render self', () => {
		const {wrapper} = setup();
		expect(wrapper.find('div').length).toBe(1);
		expect(wrapper.find('textarea').length).toBe(2);
	});

	it('should have textarea that receive text of props', () => {
		const {wrapper} = setup();
		expect(wrapper.find('textarea[value="testText"]').length).toBe(1);
	});

	it('should have textarea that receive title of props', () => {
		const {wrapper} = setup();
		expect(wrapper.find('textarea[value="testTitle"]').length).toBe(1);
	})

	it('should call onChange if textarea is changed', () => {
		const {wrapper, props} = setup();
		wrapper.find('textarea').at(1).simulate('change', {target: {value: 'new'}});
		expect(props.onMemoChange.mock.calls.length).toBe(1);
	})
});
