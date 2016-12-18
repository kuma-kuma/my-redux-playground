const getMockMemo = (id, text, title, path) => {
	return {
		id: id,
		title: title,
		text: text,
		path: path
	}
};

function getMockDirectory() {
	return {
		1: {
			path: '/dir1/1',
			title: 'title1',
			text: 'text1',
			id: 1
		},
		dir1: {
			path: '/dir1',
			title: 'title',
			id: 'dir1'
		},
		3: {
			path: '/dir1/3',
			title: 'title3',
			text: 'text3',
			id: 3
		},
		4: {
			path: '/dir1/4',
			title: 'title4',
			text: 'text4',
			id: 4
		},

		dir2: {
			path: '/dir2',
			title: 'dir2',
			id: 'dir2'
		},
	}
}

export default getMockMemo;