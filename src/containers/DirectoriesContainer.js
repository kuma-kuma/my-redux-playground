import {connect} from "react-redux";
import Directories from "../../src/components/Directories";
import _ from "lodash";

const mapStateToProps = state => {

	const separatedLocation = _.compact(state.location.split('/'));
	let containsOfDirectory = [makeContain(rootDirectoryItems(state), rootMemoItems(state))];
	separatedLocation.forEach((id) => {
		containsOfDirectory.push(makeContain(
			directoryItems(id, state),
			memoItems(id, state)
		));
	});
	return {
		containsOfDirectory: containsOfDirectory,
	}
};

function rootDirectoryItems(state) {
	return itemFilterByRegex(/^\/\d+\/$/, state.directories);
}

function rootMemoItems(state) {
	return itemFilterByRegex(/^\/\d+$/, state.memos);
}

function makeContain(directoryItems, memoItems) {
	return {
		directoryItems: directoryItems,
		memoItems: memoItems,
	}
}

function directoryItems(id, state) {
	const rgx = new RegExp('/' + id + '/\\d+/$');
	return itemFilterByRegex(rgx, state.directories);
}

function memoItems(id, state) {
	const rgx = new RegExp('/' + id + '/\\d+$');
	return itemFilterByRegex(rgx, state.memos);
}

function itemFilterByRegex(rgx, items) {
	return items.filter(i =>
		i.path.match(rgx)
	)
}

const DirectoriesContainer = connect(mapStateToProps)(Directories);

export default DirectoriesContainer;