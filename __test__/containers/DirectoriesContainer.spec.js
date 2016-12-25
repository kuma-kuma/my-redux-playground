import React from "react";
import {Provider} from "react-redux";
import {mount} from "enzyme";
import DirectoriesContainer from "../../src/containers/DirectoriesContainer";
import mock from "../mock/mockState";

function setup() {
	const store = mock.storeFake({
		directories: [
			mock.getMockDirectoryById(1, '/'),
			mock.getMockDirectoryById(2, '/'),
			mock.getMockDirectoryById(3, '/1/'),
			mock.getMockDirectoryById(4, '/1/'),
			mock.getMockDirectoryById(5, '/1/3/'),
		],
		memos: [
			mock.getMockMemoById(6, '/1/'),
			mock.getMockMemoById(7, '/1/3/'),
			mock.getMockMemoById(8, '/2/'),
			mock.getMockMemoById(9, '/1/4/'),
			mock.getMockMemoById(10, '/1/3/5/'),
			mock.getMockMemoById(11, '/1/3/5/'),
			mock.getMockMemoById(12, '/'),
		],
		location: '/1/3/5/'
	});

	const wrapper = mount(
		<Provider store={store}>
			<DirectoriesContainer/>
		</Provider>
	);

	return {
		wrapper
	}
}

describe('DirectoriesContainer', () => {
	it('should make contains of directory', () => {
		const {wrapper} = setup();
		const contains = wrapper.find('Directories').prop('containsOfDirectory');

		expect(contains[0]).toEqual({
			directoryItems: [
				mock.getMockDirectoryById(1, '/'),
				mock.getMockDirectoryById(2, '/'),
			],
			memoItems: [
				mock.getMockMemoById(12, '/'),
			]
		});

		expect(contains[1]).toEqual({
			directoryItems: [
				mock.getMockDirectoryById(3, '/1/'),
				mock.getMockDirectoryById(4, '/1/'),
			],
			memoItems: [
				mock.getMockMemoById(6, '/1/'),
			]
		});

		expect(contains[2]).toEqual({
			directoryItems: [
				mock.getMockDirectoryById(5, '/1/3/'),
			],
			memoItems: [
				mock.getMockMemoById(7, '/1/3/'),
			]
		});

		expect(contains[3]).toEqual({
			directoryItems: [],
			memoItems: [
				mock.getMockMemoById(10, '/1/3/5/'),
				mock.getMockMemoById(11, '/1/3/5/'),
			]
		});
	})
});