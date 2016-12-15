import React from "react";
import {shallow, render} from "enzyme";
import ParsedText from "../../src/components/ParsedText";

function setup() {
	const props = {
		text: '<h1>test</h1>'
	};

	const wrapper = shallow(<ParsedText { ...props }/>);

	return {
		props,
		wrapper
	}
}

describe('ParsedText', () => {
	it('should render self', () => {
		const {wrapper} = setup();
		expect(wrapper.first().name()).toBe('div');
	});

	it('should render text as innerHTML', () => {
		const wrapper = render(<ParsedText text="<h1>test</h1>"/>)
		expect(wrapper.find('h1').text()).toBe('test');
	});
});