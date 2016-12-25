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

const getMockMemoById = (id, location) => {
	return {
		id: id,
		title: 'title' + id,
		text: 'text' + id,
		path: location + id,
	}
};

const getMockDirectoryById = (id, location) => {
	return {
		id: id,
		title: 'title' + id,
		path: location + id + '/',
	}
};

const storeFake = (state) => {
	return {
		default: () => {
		},
		subscribe: () => {
		},
		dispatch: () => {
		},
		getState: () => {
			return {...state};
		},
	};
};

export default {
	getMockMemo,
	getMockDirectory,
	getMockMemoById,
	getMockDirectoryById,
	storeFake,
}
