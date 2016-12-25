const getMockMemo = (id, text, title, path) => {
	return {
		id: id,
		title: title,
		text: text,
		path: path
	}
};

const getMockDirectory = (id, title, path) => {
	return {
		id: id,
		title: title,
		path: path
	}
};

const getMockMemoById = (id, path) => {
	return {
		id: id,
		title: 'title' + id,
		text: 'text' + id,
		path: path
	}
};

const getMockDirectoryById = (id, path) => {
	return {
		id: id,
		title: 'title' + id,
		path: path
	}
};

export default {
	getMockMemo,
	getMockDirectory,
	getMockMemoById,
	getMockDirectoryById,
}
