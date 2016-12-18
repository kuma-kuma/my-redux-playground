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

export default getMockMemo;
export default getMockDirectory;